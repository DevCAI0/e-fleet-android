import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  ConteudoCabecalho,
  IconeEngrenagem,
  InfoUsuario,
  SaudacaoUsuario,
} from "./styled";

interface HeaderProps {
  nomeUsuario?: string;
  aoClicarConfiguracoes?: () => void;
}

export default function Header({
  nomeUsuario = "João",
  aoClicarConfiguracoes,
}: HeaderProps) {
  return (
    <Container>
      <ConteudoCabecalho>
        <IconeEngrenagem onPress={aoClicarConfiguracoes} activeOpacity={0.8}>
          <MaterialIcons name="settings" size={RFValue(16)} color="#FFFFFF" />
        </IconeEngrenagem>
        <InfoUsuario>
          <SaudacaoUsuario>Olá, {nomeUsuario}!</SaudacaoUsuario>
        </InfoUsuario>
      </ConteudoCabecalho>
    </Container>
  );
}
