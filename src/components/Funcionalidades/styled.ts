import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { tema } from "../../styles/index";

const { width: screenWidth } = Dimensions.get("window");

// Helper para aplicar sombras
const aplicarSombra = (sombra: any) => `
  shadow-color: ${sombra.shadowColor};
  shadow-offset: ${sombra.shadowOffset.width}px ${sombra.shadowOffset.height}px;
  shadow-opacity: ${sombra.shadowOpacity};
  shadow-radius: ${sombra.shadowRadius}px;
  elevation: ${sombra.elevation};
`;

export const Container = styled.View`
  flex-direction: row;
  gap: ${RFValue(tema.espacamento.md)}px;
  margin-bottom: ${RFValue(tema.espacamento.xl)}px;
`;

export const CartaoFuncionalidade = styled.TouchableOpacity`
  flex: 1;
  background-color: ${tema.cores.fundo.primario};
  border-radius: ${RFValue(tema.bordaRaio.xl)}px;
  padding: ${screenWidth < 360
    ? RFValue(tema.espacamento.lg)
    : RFValue(tema.espacamento.xl)}px;
  align-items: center;
  position: relative;
  min-height: ${RFValue(120)}px;
  ${aplicarSombra(tema.sombras.sm)}
`;

interface ContainerIconeProps {
  cor: string;
  corFundo: string;
}

export const ContainerIcone = styled.View<ContainerIconeProps>`
  width: ${screenWidth < 360 ? RFValue(45) : RFValue(50)}px;
  height: ${screenWidth < 360 ? RFValue(45) : RFValue(50)}px;
  border-radius: ${RFValue(tema.bordaRaio.lg)}px;
  background-color: ${(props: ContainerIconeProps) => props.corFundo};
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(tema.espacamento.md)}px;
`;

export const TituloFuncionalidade = styled.Text`
  font-size: ${screenWidth < 360
    ? RFValue(tema.tipografia.tamanhos.corpoPequeno)
    : RFValue(tema.tipografia.tamanhos.corpoRegular)}px;
  font-weight: ${tema.tipografia.pesosFonte.medio};
  color: ${tema.cores.neutras[700]};
  text-align: center;
  line-height: ${screenWidth < 360 ? RFValue(16) : RFValue(18)}px;
`;

export const NotificacaoBadge = styled.View`
  position: absolute;
  top: ${RFValue(tema.espacamento.sm)}px;
  right: ${RFValue(tema.espacamento.sm)}px;
  background-color: ${tema.cores.erro.principal};
  border-radius: ${RFValue(tema.bordaRaio.lg)}px;
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
`;

export const TextoNotificacao = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.legenda)}px;
  color: ${tema.cores.erro.contraste};
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
`;
