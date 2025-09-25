import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { tema } from "../../styles/index";

export const Container = styled.View`
  flex: 1;
  background-color: ${tema.cores.fundo.terciario};
`;

export const Conteudo = styled.ScrollView`
  flex: 1;
  padding: ${RFValue(tema.espacamento.md)}px;
  padding-bottom: ${RFValue(tema.espacamento.xl)}px;
`;
