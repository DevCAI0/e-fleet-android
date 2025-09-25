import styled from "styled-components/native";
import { tema } from "../../styles/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;
  background-color: ${tema.cores.fundo.secundario};
`;

export const ContentContainer = styled.ScrollView.attrs(() => {
  const insets = useSafeAreaInsets();

  return {
    contentContainerStyle: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingTop: insets.top + 40, // Usa apenas o safe area top real
      paddingBottom: Math.max(insets.bottom, 40), // Garante um mínimo de 40px
      justifyContent: "space-between", // Distribui o conteúdo uniformemente
    },
    showsVerticalScrollIndicator: false,
  };
})`
  flex: 1;
`;

export const TopSection = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  min-height: 300px; /* Altura mínima para garantir espaço */
`;

export const BusIllustration = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 180px;
  height: 120px;
  margin-bottom: 32px;
`;

export const WelcomeTitle = styled.Text`
  font-size: ${tema.tipografia.tamanhos.h1}px;
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
  color: ${tema.cores.neutras[800]};
  text-align: center;
  margin-bottom: 8px;
`;

export const LoginSubtitle = styled.Text`
  font-size: ${tema.tipografia.tamanhos.corpoRegular}px;
  font-weight: ${tema.tipografia.pesosFonte.regular};
  color: ${tema.cores.neutras[500]};
  text-align: center;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  max-height: 280px; /* Limita a altura máxima do form */
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${tema.cores.fundo.primario};
  border-radius: ${tema.bordaRaio.lg}px;
  border: 1px solid ${tema.cores.neutras[200]};
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
  ${tema.sombras.sm};
`;

export const InputIcon = styled.Text`
  font-size: 20px;
  margin-right: 12px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${tema.tipografia.tamanhos.corpoRegular}px;
  font-weight: ${tema.tipografia.pesosFonte.regular};
  color: ${tema.cores.neutras[800]};
  padding: 0;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${tema.cores.primaria.principal};
  border-radius: ${tema.bordaRaio.lg}px;
  justify-content: center;
  align-items: center;
  margin: 24px 0 16px 0;
  ${tema.sombras.md};
`;

export const ButtonText = styled.Text`
  font-size: ${tema.tipografia.tamanhos.corpoGrande}px;
  font-weight: ${tema.tipografia.pesosFonte.semiBold};
  color: ${tema.cores.primaria.contraste};
  letter-spacing: 1px;
`;

export const ForgetPassword = styled.Text`
  font-size: ${tema.tipografia.tamanhos.corpoPequeno}px;
  font-weight: ${tema.tipografia.pesosFonte.regular};
  color: ${tema.cores.neutras[500]};
  text-align: center;
  text-decoration: underline;
`;

export const CompanyLogo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 120px;
  height: 40px;
  align-self: center;
  margin-top: 20px;
`;
