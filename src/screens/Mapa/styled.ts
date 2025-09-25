import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { tema } from "../../styles/index";

const { width } = Dimensions.get("window");

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
  background-color: ${tema.cores.neutras[100]};
`;

interface MarkerCustomizadoProps {
  cor: string;
}

export const MarkerCustomizado = styled.View<MarkerCustomizadoProps>`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  background-color: ${(props: MarkerCustomizadoProps) => props.cor};
  align-items: center;
  justify-content: center;
  border: ${RFValue(3)}px solid ${tema.cores.fundo.primario};
  ${aplicarSombra(tema.sombras.md)}
`;

export const AlertContainer = styled.View`
  position: absolute;
  bottom: ${RFValue(100)}px;
  left: 0;
  right: 0;
  z-index: 1000;
`;
