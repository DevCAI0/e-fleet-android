// components/LoadingScreen.tsx
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import styled from "styled-components/native";
import { tema } from "../styles";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${tema.cores.fundo.secundario};
  padding: ${tema.espacamento.xl}px;
`;

const LoadingText = styled.Text`
  font-size: ${tema.tipografia.tamanhos.corpoRegular}px;
  font-weight: ${tema.tipografia.pesosFonte.medio};
  color: ${tema.cores.neutras[600]};
  margin-top: ${tema.espacamento.md}px;
  text-align: center;
`;

const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 120px;
  height: 80px;
  margin-bottom: ${tema.espacamento.xl}px;
`;

interface LoadingScreenProps {
  message?: string;
  showLogo?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Carregando...",
  showLogo = true,
}) => {
  // Substitua pelo caminho correto do seu logo
  const logoSource = require("../../assets/icons/bus.png");

  return (
    <Container>
      {showLogo && <Logo source={logoSource} />}
      <ActivityIndicator size="large" color={tema.cores.primaria.principal} />
      <LoadingText>{message}</LoadingText>
    </Container>
  );
};

export default LoadingScreen;
