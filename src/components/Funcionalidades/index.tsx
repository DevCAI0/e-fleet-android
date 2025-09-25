import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  CartaoFuncionalidade,
  ContainerIcone,
  TituloFuncionalidade,
  NotificacaoBadge,
  TextoNotificacao,
} from "./styled";

interface FuncionalidadeItem {
  id: string;
  titulo: string;
  icone: keyof typeof MaterialIcons.glyphMap;
  cor: string;
  corFundo: string;
  notificacoes?: number;
  aoClicar?: () => void;
}

interface FuncionalidadesProps {
  funcionalidades?: FuncionalidadeItem[];
}

const funcionalidadesDefault: FuncionalidadeItem[] = [
  {
    id: "ocorrencias",
    titulo: "Ocorrências",
    icone: "notifications",
    cor: "#7BC142",
    corFundo: "rgba(123, 193, 66, 0.1)",
    notificacoes: 3,
  },
  {
    id: "rastreadores",
    titulo: "Rastreadores",
    icone: "location-on",
    cor: "#7BC142",
    corFundo: "rgba(123, 193, 66, 0.1)",
  },
];

export default function Funcionalidades({
  funcionalidades = funcionalidadesDefault,
}: FuncionalidadesProps) {
  return (
    <Container>
      {funcionalidades.map((funcionalidade) => (
        <CartaoFuncionalidade
          key={funcionalidade.id}
          activeOpacity={0.8}
          onPress={funcionalidade.aoClicar}
        >
          {funcionalidade.notificacoes && funcionalidade.notificacoes > 0 && (
            <NotificacaoBadge>
              <TextoNotificacao>{funcionalidade.notificacoes}</TextoNotificacao>
            </NotificacaoBadge>
          )}
          <ContainerIcone
            cor={funcionalidade.cor}
            corFundo={funcionalidade.corFundo}
          >
            <MaterialIcons
              name={funcionalidade.icone}
              size={RFValue(24)}
              color={funcionalidade.cor}
            />
          </ContainerIcone>
          <TituloFuncionalidade>{funcionalidade.titulo}</TituloFuncionalidade>
        </CartaoFuncionalidade>
      ))}
    </Container>
  );
}
