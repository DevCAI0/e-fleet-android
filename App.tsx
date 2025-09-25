import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import { tema } from "./src/styles";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider theme={tema}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
