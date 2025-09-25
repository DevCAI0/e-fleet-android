import React from "react";
import { User } from "../entities/User";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authService from "../services/auth/AuthService";
import { Alert } from "react-native";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isSignout: boolean;
}

interface AuthAction {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  user: User | null;
  token: string | null;
}

function authReducer(prevState: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        user: action.user,
        token: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        user: action.user,
        token: action.token,
        isSignout: false,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        user: null,
        token: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
}

interface AuthContextData extends AuthState {
  login: (
    login: string,
    password: string,
    deviceName?: string
  ) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshToken: (deviceName?: string) => Promise<boolean>;
  checkPermission: (permission: string) => Promise<boolean>;
  getMe: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    token: null,
    user: null,
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let storedToken: string | null = null;
      let currentUser: User | null = null;

      try {
        storedToken = await SecureStore.getItemAsync("e-fleet-token");
        const userDataString = await AsyncStorage.getItem("current-user");
        currentUser = userDataString ? JSON.parse(userDataString) : null;

        if (storedToken && currentUser) {
          try {
            const response = await authService.getMe();
            if (response.status !== "success") {
              await SecureStore.deleteItemAsync("e-fleet-token");
              await AsyncStorage.removeItem("current-user");
              storedToken = null;
              currentUser = null;
            }
          } catch (error) {
            await SecureStore.deleteItemAsync("e-fleet-token");
            await AsyncStorage.removeItem("current-user");
            storedToken = null;
            currentUser = null;
          }
        }
      } catch (error) {
        console.log("Erro ao restaurar token:", error);
      }

      dispatch({
        type: "RESTORE_TOKEN",
        token: storedToken,
        user: currentUser,
      });
    };

    bootstrapAsync();
  }, []);

  const methods = React.useMemo(
    () => ({
      login: async (
        login: string,
        password: string,
        deviceName?: string
      ): Promise<boolean> => {
        try {
          const params = {
            login: login.toLowerCase(),
            password,
            device_name: deviceName || "e-fleet-app",
          };

          const response = await authService.login(params);

          if (response.status === "success" && response.data) {
            const { user, token } = response.data;

            await SecureStore.setItemAsync("e-fleet-token", token);
            await AsyncStorage.setItem("current-user", JSON.stringify(user));

            dispatch({
              type: "SIGN_IN",
              token: token,
              user: user,
            });

            return true;
          } else {
            Alert.alert("Erro", response.message || "Credenciais inválidas");
            return false;
          }
        } catch (error: any) {
          console.log("Erro no login:", error);

          if (error?.response?.data?.message) {
            Alert.alert("Erro", error.response.data.message);
          } else {
            Alert.alert("Erro", "Falha ao realizar login. Tente novamente.");
          }

          return false;
        }
      },

      logout: async (): Promise<void> => {
        try {
          if (state.token) {
            await authService.logout();
          }
        } catch (error) {
          console.log("Erro ao fazer logout no servidor:", error);
        } finally {
          dispatch({
            type: "SIGN_OUT",
            token: null,
            user: null,
          });

          await SecureStore.deleteItemAsync("e-fleet-token");
          await AsyncStorage.removeItem("current-user");
        }
      },

      refreshToken: async (deviceName?: string): Promise<boolean> => {
        try {
          const params = { device_name: deviceName || "e-fleet-app" };
          const response = await authService.refreshToken(params);

          if (response.status === "success" && response.data) {
            const { token } = response.data;

            await SecureStore.setItemAsync("e-fleet-token", token);

            dispatch({
              type: "SIGN_IN",
              token: token,
              user: state.user,
            });

            return true;
          }

          return false;
        } catch (error) {
          console.log("Erro ao renovar token:", error);
          return false;
        }
      },

      checkPermission: async (permission: string): Promise<boolean> => {
        try {
          const response = await authService.checkPermission({ permission });

          if (response.status === "success" && response.data) {
            return response.data.has_permission;
          }

          return false;
        } catch (error) {
          console.log("Erro ao verificar permissão:", error);
          return false;
        }
      },

      getMe: async (): Promise<void> => {
        try {
          const response = await authService.getMe();

          if (response.status === "success" && response.data) {
            const { user } = response.data;

            await AsyncStorage.setItem("current-user", JSON.stringify(user));

            dispatch({
              type: "SIGN_IN",
              token: state.token,
              user: user,
            });
          }
        } catch (error) {
          console.log("Erro ao buscar dados do usuário:", error);
          throw error;
        }
      },
    }),
    [state.token, state.user]
  );

  return (
    <AuthContext.Provider
      value={{
        ...state,
        ...methods,
        isAuthenticated: !!state.token && !!state.user,
        loading: state.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
