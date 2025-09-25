import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { tema } from "../../../styles";
import constants from "expo-constants";

const statusBarHeight = constants.statusBarHeight;

export const Container = styled.View`
  background-color: ${tema.cores.fundo.primario};
  padding-top: ${statusBarHeight + RFValue(tema.espacamento.md)}px;
  padding-left: ${RFValue(tema.espacamento.lg)}px;
  padding-right: ${RFValue(tema.espacamento.lg)}px;
  padding-bottom: ${RFValue(tema.espacamento.md)}px;
  border-bottom-left-radius: ${RFValue(tema.bordaRaio.xl)}px;
  border-bottom-right-radius: ${RFValue(tema.bordaRaio.xl)}px;
`;

export const ConteudoCabecalho = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconeEngrenagem = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(tema.bordaRaio.xl)}px;
  background-color: ${tema.cores.primaria.principal};
  align-items: center;
  justify-content: center;
`;

export const InfoUsuario = styled.View`
  align-items: flex-end;
`;

export const SaudacaoUsuario = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.h2)}px;
  font-weight: ${tema.tipografia.pesosFonte.negrito};
  color: ${tema.cores.neutras[800]};
`;
