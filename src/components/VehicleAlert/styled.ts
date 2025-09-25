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
  background-color: ${tema.cores.fundo.primario};
  border-radius: ${RFValue(tema.bordaRaio.lg)}px;
  padding: ${RFValue(tema.espacamento.lg)}px;
  margin: ${RFValue(tema.espacamento.md)}px;
  ${aplicarSombra(tema.sombras.lg)}
`;

export const ProximityIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${tema.cores.sucesso.clara};
  border-radius: ${RFValue(tema.bordaRaio.md)}px;
  padding: ${RFValue(tema.espacamento.sm)}px;
  margin-bottom: ${RFValue(tema.espacamento.md)}px;
`;

export const ProximityText = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  color: ${tema.cores.sucesso.escura};
  font-weight: ${tema.tipografia.pesosFonte.medio};
  margin-left: ${RFValue(tema.espacamento.xs)}px;
`;

export const VehicleInfo = styled.View`
  margin-bottom: ${RFValue(tema.espacamento.lg)}px;
`;

export const VehicleNumber = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.h3)}px;
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
  color: ${tema.cores.neutras[800]};
  margin-bottom: ${RFValue(tema.espacamento.xs)}px;
`;

export const TechnicianName = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoRegular)}px;
  color: ${tema.cores.neutras[600]};
  margin-bottom: ${RFValue(tema.espacamento.sm)}px;
`;

interface StatusBadgeProps {
  cor: string;
}

export const StatusBadge = styled.View<StatusBadgeProps>`
  background-color: ${(props: StatusBadgeProps) => props.cor};
  border-radius: ${RFValue(tema.bordaRaio.sm)}px;
  padding-left: ${RFValue(tema.espacamento.sm)}px;
  padding-right: ${RFValue(tema.espacamento.sm)}px;
  padding-top: ${RFValue(tema.espacamento.xs)}px;
  padding-bottom: ${RFValue(tema.espacamento.xs)}px;
  align-self: flex-start;
`;

export const StatusText = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  color: ${tema.cores.neutras.branco};
  font-weight: ${tema.tipografia.pesosFonte.medio};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: ${RFValue(tema.espacamento.sm)}px;
`;

interface ActionButtonProps {
  tipo: "primary" | "secondary" | "dismiss";
}

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  flex: ${(props: ActionButtonProps) => (props.tipo === "dismiss" ? 0 : 1)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ActionButtonProps) => {
    switch (props.tipo) {
      case "primary":
        return tema.cores.primaria.principal;
      case "secondary":
        return tema.cores.fundo.secundario;
      case "dismiss":
        return tema.cores.neutras[200];
      default:
        return tema.cores.fundo.secundario;
    }
  }};
  border: 2px solid
    ${(props: ActionButtonProps) => {
      switch (props.tipo) {
        case "primary":
          return tema.cores.primaria.principal;
        case "secondary":
          return tema.cores.primaria.principal;
        case "dismiss":
          return tema.cores.neutras[300];
        default:
          return tema.cores.neutras[300];
      }
    }};
  border-radius: ${RFValue(tema.bordaRaio.md)}px;
  padding: ${RFValue(tema.espacamento.sm)}px;
  min-width: ${(props: ActionButtonProps) =>
    props.tipo === "dismiss" ? RFValue(40) : "auto"}px;
  gap: ${RFValue(tema.espacamento.xs)}px;
`;

interface ButtonTextProps {
  tipo: "primary" | "secondary";
}

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  font-weight: ${tema.tipografia.pesosFonte.medio};
  color: ${(props: ButtonTextProps) =>
    props.tipo === "primary"
      ? tema.cores.neutras.branco
      : tema.cores.primaria.principal};
`;
