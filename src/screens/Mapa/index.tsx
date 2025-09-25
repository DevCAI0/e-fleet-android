import React from "react";
import { Dimensions, Alert, Vibration } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, MarkerCustomizado, AlertContainer } from "./styled";
import SearchHeader from "../../components/SearchHeader";
import VehicleAlert from "../../components/VehicleAlert";
import NavBar from "../../components/common/navBar";

interface VeiculoMapa {
  id: string;
  latitude: number;
  longitude: number;
  numero: string;
  tecnico: string;
  statusTecnico: "trabalhando" | "almoco" | "offline" | "manutencao";
  tipo: "andamento" | "concluido" | "pendente";
  proximidade?: number;
}

interface Tecnico {
  id: string;
  nome: string;
  status: "trabalhando" | "almoco" | "offline" | "manutencao";
}

export default function Mapa() {
  const [filtroAtivo, setFiltroAtivo] = React.useState<string>("todos");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [veiculoSelecionado, setVeiculoSelecionado] =
    React.useState<VeiculoMapa | null>(null);
  const [tecnicoSelecionado, setTecnicoSelecionado] =
    React.useState<Tecnico | null>(null);

  // Coordenadas iniciais (Vitória da Conquista)
  const regiaoInicial = {
    latitude: -14.8661,
    longitude: -40.8394,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Dados dos técnicos com posições no mapa
  const tecnicos: (Tecnico & { latitude: number; longitude: number })[] = [
    {
      id: "1",
      nome: "João Silva",
      status: "trabalhando",
      latitude: -14.87,
      longitude: -40.835,
    },
    {
      id: "2",
      nome: "Maria Santos",
      status: "almoco",
      latitude: -14.86,
      longitude: -40.825,
    },
    {
      id: "3",
      nome: "Pedro Costa",
      status: "manutencao",
      latitude: -14.88,
      longitude: -40.845,
    },
    {
      id: "4",
      nome: "Ana Lima",
      status: "offline",
      latitude: -14.85,
      longitude: -40.855,
    },
  ];

  // Dados dos veículos com técnicos
  const veiculos: VeiculoMapa[] = [
    {
      id: "1",
      latitude: -14.8661,
      longitude: -40.8394,
      numero: "541511",
      tecnico: "João Silva",
      statusTecnico: "trabalhando",
      tipo: "andamento",
      proximidade: 50,
    },
    {
      id: "2",
      latitude: -14.8561,
      longitude: -40.8294,
      numero: "541512",
      tecnico: "Maria Santos",
      statusTecnico: "almoco",
      tipo: "andamento",
      proximidade: 200,
    },
    {
      id: "3",
      latitude: -14.8761,
      longitude: -40.8494,
      numero: "541513",
      tecnico: "Pedro Costa",
      statusTecnico: "manutencao",
      tipo: "concluido",
    },
    {
      id: "4",
      latitude: -14.8561,
      longitude: -40.8594,
      numero: "541514",
      tecnico: "Ana Lima",
      statusTecnico: "offline",
      tipo: "pendente",
    },
  ];

  // Filtrar técnicos baseado na busca e filtros
  const tecnicosFiltrados = tecnicos.filter((tecnico) => {
    // Filtro por busca (nome do técnico)
    const matchSearch =
      searchQuery === "" ||
      tecnico.nome.toLowerCase().includes(searchQuery.toLowerCase());

    // Filtro por tipo de visualização
    let matchStatus = true;

    if (filtroAtivo === "todos") {
      matchStatus = true; // Mostra todos
    } else if (filtroAtivo === "somente-veiculos") {
      matchStatus = false; // Não mostra técnicos quando filtro é só veículos
    } else if (filtroAtivo === "somente-tecnicos") {
      matchStatus = tecnico.status !== "offline"; // Mostra apenas técnicos ativos
    } else {
      matchStatus = tecnico.status === filtroAtivo; // Filtro específico por status
    }

    return matchSearch && matchStatus;
  });

  // Filtrar veículos baseado na busca e filtros
  const veiculosFiltrados = veiculos.filter((veiculo) => {
    // Filtro por busca (número do veículo ou nome do técnico)
    const matchSearch =
      searchQuery === "" ||
      veiculo.numero.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.tecnico.toLowerCase().includes(searchQuery.toLowerCase());

    // Filtro por tipo de visualização
    let matchStatus = true;

    if (filtroAtivo === "todos") {
      matchStatus = true; // Mostra todos
    } else if (filtroAtivo === "somente-veiculos") {
      matchStatus = true; // Mostra todos os veículos
    } else if (filtroAtivo === "somente-tecnicos") {
      matchStatus = false; // Não mostra veículos quando filtro é só técnicos
    } else {
      matchStatus = veiculo.statusTecnico === filtroAtivo; // Filtro específico por status
    }

    return matchSearch && matchStatus;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterTecnico = (status: string) => {
    setFiltroAtivo(status);

    // Atualizar técnico selecionado baseado no filtro
    if (
      status === "todos" ||
      status === "somente-veiculos" ||
      status === "somente-tecnicos"
    ) {
      setTecnicoSelecionado(null);
    } else {
      const tecnico = tecnicos.find((t) => t.status === status);
      setTecnicoSelecionado(tecnico || null);
    }
  };

  const handleMarkerPress = (veiculo: VeiculoMapa) => {
    setVeiculoSelecionado(veiculo);

    // Vibrar se o veículo estiver próximo
    if (veiculo.proximidade && veiculo.proximidade < 100) {
      Vibration.vibrate([0, 500, 200, 500]);
    }
  };

  const handleScheduleMaintenance = (vehicleId: string) => {
    Alert.alert(
      "Manutenção Agendada",
      `Manutenção agendada para o veículo ${vehicleId}. O status foi alterado para "Em Andamento".`,
      [{ text: "OK" }]
    );
    setVeiculoSelecionado(null);
  };

  const handleDismissAlert = () => {
    setVeiculoSelecionado(null);
  };

  const getCorMarker = (statusTecnico: string) => {
    switch (statusTecnico) {
      case "trabalhando":
        return "#7BC142";
      case "almoco":
        return "#F59E0B";
      case "manutencao":
        return "#3B82F6";
      case "offline":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getIconeMarker = (
    statusTecnico: string
  ): keyof typeof MaterialIcons.glyphMap => {
    switch (statusTecnico) {
      case "trabalhando":
        return "build";
      case "almoco":
        return "restaurant";
      case "manutencao":
        return "settings";
      case "offline":
        return "person-off";
      default:
        return "local-shipping";
    }
  };

  const renderMarkerIcon = (
    tipo: "veiculo" | "tecnico",
    statusTecnico?: string
  ) => {
    if (tipo === "veiculo") {
      return (
        <MaterialIcons
          name="local-shipping"
          size={RFValue(16)}
          color="#FFFFFF"
        />
      );
    } else {
      // Para técnicos, mostra ícone baseado no status
      return (
        <MaterialIcons
          name={getIconeMarker(statusTecnico || "offline")}
          size={RFValue(16)}
          color="#FFFFFF"
        />
      );
    }
  };

  const handleTecnicoPress = (tecnico: any) => {
    // Criar um objeto compatível com VehicleAlert para técnicos
    const tecnicoFormatado = {
      id: tecnico.id,
      numero: `Técnico: ${tecnico.nome}`,
      tecnico: tecnico.nome,
      statusTecnico: tecnico.status,
      tipo: "tecnico" as const,
      latitude: tecnico.latitude,
      longitude: tecnico.longitude,
    };
    setVeiculoSelecionado(tecnicoFormatado);
  };

  return (
    <Container>
      {/* Header de Busca */}
      <SearchHeader
        onSearch={handleSearch}
        onFilterTecnico={handleFilterTecnico}
        tecnicoSelecionado={tecnicoSelecionado}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={regiaoInicial}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={false}
        toolbarEnabled={false}
        mapType="standard"
      >
        {/* Markers dos Veículos */}
        {veiculosFiltrados.map((veiculo) => (
          <Marker
            key={`veiculo-${veiculo.id}`}
            coordinate={{
              latitude: veiculo.latitude,
              longitude: veiculo.longitude,
            }}
            onPress={() => handleMarkerPress(veiculo)}
          >
            <MarkerCustomizado cor={getCorMarker(veiculo.statusTecnico)}>
              {renderMarkerIcon("veiculo", veiculo.statusTecnico)}
            </MarkerCustomizado>
          </Marker>
        ))}

        {/* Markers dos Técnicos */}
        {tecnicosFiltrados.map((tecnico) => (
          <Marker
            key={`tecnico-${tecnico.id}`}
            coordinate={{
              latitude: tecnico.latitude,
              longitude: tecnico.longitude,
            }}
            onPress={() => handleTecnicoPress(tecnico)}
          >
            <MarkerCustomizado cor={getCorMarker(tecnico.status)}>
              {renderMarkerIcon("tecnico", tecnico.status)}
            </MarkerCustomizado>
          </Marker>
        ))}
      </MapView>

      {/* Alert de Veículo/Técnico Selecionado */}
      {veiculoSelecionado && (
        <AlertContainer>
          <VehicleAlert
            veiculo={veiculoSelecionado}
            onScheduleMaintenance={handleScheduleMaintenance}
            onDismiss={handleDismissAlert}
          />
        </AlertContainer>
      )}

      <NavBar />
    </Container>
  );
}
