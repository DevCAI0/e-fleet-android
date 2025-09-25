import styled from "styled-components/native";
import { tema } from "../../../styles";

// Interface para props do texto
interface IconTextProps {
  active?: boolean;
}

// Interface para SafeContainer
interface SafeContainerProps {
  bottomInset: number;
}

// Container com Safe Area ajustado
export const SafeContainer = styled.View<SafeContainerProps>`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${tema.cores.fundo.primario};
  border-top-width: 1px;
  border-top-color: ${tema.cores.neutras[200]};
  border-top-left-radius: ${tema.bordaRaio["2xl"]}px;
  border-top-right-radius: ${tema.bordaRaio["2xl"]}px;
  padding-left: ${tema.espacamento.sm}px;
  padding-right: ${tema.espacamento.sm}px;
  padding-top: ${tema.espacamento.xs}px;

  /* 👇 props agora tipado corretamente */
  padding-bottom: ${(props: SafeContainerProps) =>
    props.bottomInset > 0 ? props.bottomInset : tema.espacamento.lg}px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

// Botão dos ícones
export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: ${tema.espacamento.xs}px;
  border-radius: ${tema.bordaRaio.md}px;
  min-height: 50px;
`;

// Texto dos ícones
export const IconText = styled.Text<IconTextProps>`
  font-size: ${tema.tipografia.tamanhos.corpoPequeno}px;
  font-family: ${tema.tipografia.familiaFonte.primaria};
  font-weight: ${(props: IconTextProps) =>
    props.active
      ? tema.tipografia.pesosFonte.semiBold
      : tema.tipografia.pesosFonte.regular};
  margin-top: ${tema.espacamento.xs}px;
  color: ${(props: IconTextProps) =>
    props.active ? tema.cores.primaria.principal : tema.cores.neutras[400]};
`;
