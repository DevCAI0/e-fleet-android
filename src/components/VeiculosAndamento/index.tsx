import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  TituloSecao,
  CartaoVeiculo,
  CabecalhoVeiculo,
  InfoVeiculo,
  NumeroVeiculo,
  TipoManutencao,
  RodapeVeiculo,
  IconeLocalizacao,
  EnderecoVeiculo,
  EtiquetaStatus,
  TextoStatus,
} from "./styled";

interface VeiculoAndamento {
  id: string;
  numero: string;
  tipo: string;
  endereco: string;
  status?: string;
}

interface VeiculosAndamentoProps {
  titulo?: string;
  veiculos?: VeiculoAndamento[];
  aoClicarVeiculo?: (veiculo: VeiculoAndamento) => void;
}

const veiculosDefault: VeiculoAndamento[] = [
  {
    id: "1",
    numero: "541511",
    tipo: "Troca de leitor",
    endereco: "Rua A, 123",
    status: "Em Andamento",
  },
  {
    id: "2",
    numero: "541512",
    tipo: "Manutenção preventiva",
    endereco: "Rua B, 456",
    status: "Em Andamento",
  },
  {
    id: "3",
    numero: "541513",
    tipo: "Reparo de sensor",
    endereco: "Rua C, 789",
    status: "Em Andamento",
  },
];

export default function VeiculosAndamento({
  titulo = "Em Andamento",
  veiculos = veiculosDefault,
  aoClicarVeiculo,
}: VeiculosAndamentoProps) {
  return (
    <Container>
      <TituloSecao>{titulo}</TituloSecao>

      {veiculos.map((veiculo) => (
        <CartaoVeiculo
          key={veiculo.id}
          activeOpacity={0.95}
          onPress={() => aoClicarVeiculo?.(veiculo)}
        >
          <CabecalhoVeiculo>
            <InfoVeiculo>
              <NumeroVeiculo>{veiculo.numero}</NumeroVeiculo>
              <TipoManutencao>{veiculo.tipo}</TipoManutencao>
            </InfoVeiculo>
            <EtiquetaStatus>
              <TextoStatus>{veiculo.status || "Em Andamento"}</TextoStatus>
            </EtiquetaStatus>
          </CabecalhoVeiculo>

          <RodapeVeiculo>
            <IconeLocalizacao>
              <MaterialIcons
                name="location-on"
                size={RFValue(14)}
                color="#9CA3AF"
              />
            </IconeLocalizacao>
            <EnderecoVeiculo>{veiculo.endereco}</EnderecoVeiculo>
          </RodapeVeiculo>
        </CartaoVeiculo>
      ))}
    </Container>
  );
}
