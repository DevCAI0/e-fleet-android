import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useAuth from "../hook/useAuth";
import LoadingScreen from "../components/LoadingScreen";

// Screens
import Login from "../screens/auth";
import Home from "../screens/Home";
import Mapa from "../screens/Mapa";
// import Checklist from "../screens/Checklist";
// import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

// Tipos para navegação - Telas não autenticadas
type AuthStackParamList = {
  Login: undefined;
};

// Tipos para navegação - Telas autenticadas
type AppStackParamList = {
  Home: undefined;
  Mapa: undefined;
  Checklist: undefined;
  Profile: undefined;
};

// Tipos combinados
type RootStackParamList = AuthStackParamList & AppStackParamList;

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;

// Stack para usuários não autenticados
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

// Stack para usuários autenticados
const AppStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Mapa" component={Mapa} />
    {/* TODO: Descomentar quando as telas estiverem prontas */}
    {/* <Stack.Screen name="Checklist" component={Checklist} /> */}
    {/* <Stack.Screen name="Profile" component={Profile} /> */}
  </Stack.Navigator>
);

// Componente principal de roteamento
const Routes = () => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <NavigationContainer>
      {loading ? (
        <LoadingScreen message="Verificando autenticação..." />
      ) : isAuthenticated ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
