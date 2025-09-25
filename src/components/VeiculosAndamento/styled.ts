import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { tema } from "../../styles/index";

// Helper para aplicar sombras
const aplicarSombra = (sombra: any) => `
  shadow-color: ${sombra.shadowColor};
  shadow-offset: ${sombra.shadowOffset.width}px ${sombra.shadowOffset.height}px;
  shadow-opacity: ${sombra.shadowOpacity};
  shadow-radius: ${sombra.shadowRadius}px;
  elevation: ${sombra.elevation};
`;

export const Container = styled.View`
  flex: 1;
`;

export const TituloSecao = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.h3)}px;
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
  color: ${tema.cores.neutras[800]};
  margin-bottom: ${RFValue(tema.espacamento.md)}px;
`;

export const CartaoVeiculo = styled.TouchableOpacity`
  background-color: ${tema.cores.fundo.primario};
  border-radius: ${RFValue(tema.bordaRaio.lg)}px;
  padding: ${RFValue(tema.espacamento.md)}px;
  margin-bottom: ${RFValue(tema.espacamento.lg)}px;
  ${aplicarSombra(tema.sombras.sm)}
`;

export const CabecalhoVeiculo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${RFValue(tema.espacamento.sm)}px;
`;

export const InfoVeiculo = styled.View`
  flex: 1;
`;

export const NumeroVeiculo = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.h3)}px;
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
  color: ${tema.cores.neutras[800]};
  margin-bottom: ${RFValue(tema.espacamento.xs)}px;
`;

export const TipoManutencao = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoRegular)}px;
  color: ${tema.cores.neutras[500]};
  margin-bottom: ${RFValue(tema.espacamento.sm)}px;
`;

export const RodapeVeiculo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconeLocalizacao = styled.View`
  margin-right: ${RFValue(tema.espacamento.xs)}px;
`;

export const EnderecoVeiculo = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  color: ${tema.cores.neutras[400]};
`;

export const EtiquetaStatus = styled.View`
  background-color: ${tema.cores.primaria.principal};
  border-radius: ${RFValue(tema.bordaRaio.sm)}px;
  padding-left: ${RFValue(tema.espacamento.md)}px;
  padding-right: ${RFValue(tema.espacamento.md)}px;
  padding-top: ${RFValue(tema.espacamento.sm)}px;
  padding-bottom: ${RFValue(tema.espacamento.sm)}px;
`;

export const TextoStatus = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  color: ${tema.cores.primaria.contraste};
  font-weight: ${tema.tipografia.pesosFonte.medio};
`;
