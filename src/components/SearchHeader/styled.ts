import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { tema } from "../../styles/index";
import constants from "expo-constants";

const statusBarHeight = constants.statusBarHeight;

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
  padding-top: ${statusBarHeight + RFValue(tema.espacamento.md)}px;
  padding-left: ${RFValue(tema.espacamento.lg)}px;
  padding-right: ${RFValue(tema.espacamento.lg)}px;
  padding-bottom: ${RFValue(tema.espacamento.md)}px;
  border-bottom-left-radius: ${RFValue(tema.bordaRaio.xl)}px;
  border-bottom-right-radius: ${RFValue(tema.bordaRaio.xl)}px;
  ${aplicarSombra(tema.sombras.sm)}
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${tema.cores.fundo.secundario};
  border-radius: ${RFValue(tema.bordaRaio.lg)}px;
  padding: ${RFValue(tema.espacamento.xs)}px;
  margin-bottom: ${RFValue(tema.espacamento.md)}px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoRegular)}px;
  color: ${tema.cores.neutras[800]};
  padding: ${RFValue(tema.espacamento.sm)}px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: ${RFValue(tema.espacamento.sm)}px;
  border-radius: ${RFValue(tema.bordaRaio.md)}px;
  background-color: ${tema.cores.primaria.clara};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${tema.cores.fundo.secundario};
  border-radius: ${RFValue(tema.bordaRaio.md)}px;
  padding: ${RFValue(tema.espacamento.sm)}px;
  margin-bottom: ${RFValue(tema.espacamento.md)}px;
`;

interface StatusIndicatorProps {
  cor: string;
}

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${(props: StatusIndicatorProps) => props.cor};
  margin-right: ${RFValue(tema.espacamento.sm)}px;
`;

export const StatusText = styled.Text`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  color: ${tema.cores.neutras[600]};
  font-weight: ${tema.tipografia.pesosFonte.medio};
`;

export const FilterContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: RFValue(tema.espacamento.sm),
  },
})``;

interface FilterButtonProps {
  ativo: boolean;
  cor: string;
}

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  background-color: ${(props: FilterButtonProps) =>
    props.ativo ? props.cor : tema.cores.fundo.secundario};
  border-radius: ${RFValue(tema.bordaRaio.completo)}px;
  padding-left: ${RFValue(tema.espacamento.md)}px;
  padding-right: ${RFValue(tema.espacamento.md)}px;
  padding-top: ${RFValue(tema.espacamento.xs)}px;
  padding-bottom: ${RFValue(tema.espacamento.xs)}px;
  border: 2px solid
    ${(props: FilterButtonProps) =>
      props.ativo ? props.cor : tema.cores.neutras[200]};
`;

interface FilterTextProps {
  ativo: boolean;
}

export const FilterText = styled.Text<FilterTextProps>`
  font-size: ${RFValue(tema.tipografia.tamanhos.corpoPequeno)}px;
  font-weight: ${tema.tipografia.pesosFonte.medio};
  color: ${(props: FilterTextProps) =>
    props.ativo ? tema.cores.neutras.branco : tema.cores.neutras[600]};
`;
