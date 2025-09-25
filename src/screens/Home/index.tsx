import React from "react";
import { RefreshControl } from "react-native";
import { Container, Conteudo } from "./styled";
import Header from "../../components/common/header";
import Funcionalidades from "../../components/Funcionalidades";
import VeiculosAndamento from "../../components/VeiculosAndamento";
import NavBar from "../../components/common/navBar";

export default function Home() {
  const [estaCarregando, setEstaCarregando] = React.useState(false);

  const aoRecarregar = React.useCallback(() => {
    setEstaCarregando(true);
    setTimeout(() => setEstaCarregando(false), 1000);
  }, []);

  const aoClicarConfiguracoes = () => {
    console.log("Configurações clicadas");
    // Implementar navegação para configurações
  };

  const aoClicarFuncionalidade = (funcionalidadeId: string) => {
    console.log("Funcionalidade clicada:", funcionalidadeId);
    // Implementar navegação baseada na funcionalidade
  };

  const aoClicarVeiculo = (veiculo: any) => {
    console.log("Veículo clicado:", veiculo);
    // Implementar navegação para detalhes do veículo
  };

  const funcionalidades = [
    {
      id: "ocorrencias",
      titulo: "Ocorrências",
      icone: "notifications" as const,
      cor: "#7BC142",
      corFundo: "rgba(123, 193, 66, 0.1)",
      notificacoes: 3,
      aoClicar: () => aoClicarFuncionalidade("ocorrencias"),
    },
    {
      id: "rastreadores",
      titulo: "Rastreadores",
      icone: "location-on" as const,
      cor: "#7BC142",
      corFundo: "rgba(123, 193, 66, 0.1)",
      aoClicar: () => aoClicarFuncionalidade("rastreadores"),
    },
  ];

  const veiculosEmAndamento = [
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

  return (
    <Container>
      <Header
        nomeUsuario="João"
        aoClicarConfiguracoes={aoClicarConfiguracoes}
      />

      <Conteudo
        refreshControl={
          <RefreshControl
            refreshing={estaCarregando}
            onRefresh={aoRecarregar}
            tintColor="#7BC142"
          />
        }
      >
        <Funcionalidades funcionalidades={funcionalidades} />

        <VeiculosAndamento
          titulo="Em Andamento"
          veiculos={veiculosEmAndamento}
          aoClicarVeiculo={aoClicarVeiculo}
        />
      </Conteudo>

      <NavBar />
    </Container>
  );
}
