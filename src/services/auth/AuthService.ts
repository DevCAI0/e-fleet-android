import api from "../api"; // Assumindo que você tem um interceptor configurado
import * as SecureStore from "expo-secure-store";

interface LoginParams {
  login: string;
  password: string;
  device_name?: string;
}

interface RefreshTokenParams {
  device_name?: string;
}

interface CheckPermissionParams {
  permission: string;
}

interface ApiResponse<T = any> {
  status: "success" | "error";
  message: string;
  data?: T;
  errors?: any;
}

class AuthService {
  /**
   * Realizar login
   */
  async login(params: LoginParams): Promise<ApiResponse> {
    try {
      const response = await api.post("/auth/login", params);
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  }

  /**
   * Realizar logout
   */
  async logout(): Promise<ApiResponse> {
    try {
      // Pegar o token atual
      const token = await SecureStore.getItemAsync("e-fleet-token");

      const response = await api.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  }

  /**
   * Obter informações do usuário autenticado
   */
  async getMe(): Promise<ApiResponse> {
    try {
      const token = await SecureStore.getItemAsync("e-fleet-token");

      const response = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  }

  /**
   * Renovar token
   */
  async refreshToken(params: RefreshTokenParams): Promise<ApiResponse> {
    try {
      const token = await SecureStore.getItemAsync("e-fleet-token");

      const response = await api.post("/auth/refresh", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  }

  /**
   * Verificar se usuário tem permissão específica
   */
  async checkPermission(params: CheckPermissionParams): Promise<ApiResponse> {
    try {
      const token = await SecureStore.getItemAsync("e-fleet-token");

      const response = await api.post("/auth/check-permission", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  }
}

export default new AuthService();
