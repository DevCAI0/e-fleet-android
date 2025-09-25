import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
  Container,
  ContentContainer,
  TopSection,
  BusIllustration,
  WelcomeTitle,
  LoginSubtitle,
  FormContainer,
  InputContainer,
  Input,
  InputIcon,
  LoginButton,
  ButtonText,
  ForgetPassword,
  CompanyLogo,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";

const busIcon = require("../../../assets/icons/bus.png");
const ellevenLogo = require("../../../assets/icons/elleven.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = () => {
    login(fields.email, fields.password);
  };

  return (
    <Container>
      <ContentContainer>
        <TopSection>
          <BusIllustration source={busIcon} />
          <WelcomeTitle>Bem-vindo ao E-Fleet</WelcomeTitle>
          <LoginSubtitle>Faça login para continuar</LoginSubtitle>
        </TopSection>

        <FormContainer>
          <InputContainer>
            <InputIcon>📧</InputIcon>
            <Input
              placeholder="E-mail"
              placeholderTextColor="#9CA3AF"
              value={fields.email}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  email: val,
                });
              }}
            />
          </InputContainer>

          <InputContainer>
            <InputIcon>🔒</InputIcon>
            <Input
              placeholder="Senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={true}
              value={fields.password}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  password: val,
                });
              }}
            />
          </InputContainer>

          <LoginButton onPress={handleLogin}>
            <ButtonText>ENTRAR</ButtonText>
          </LoginButton>

          <ForgetPassword>Esqueceu minha senha</ForgetPassword>
        </FormContainer>

        <CompanyLogo source={ellevenLogo} />
      </ContentContainer>
    </Container>
  );
};

export default Login;
