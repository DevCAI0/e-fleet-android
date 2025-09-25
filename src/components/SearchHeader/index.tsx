import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  FilterContainer,
  FilterButton,
  FilterText,
  StatusContainer,
  StatusIndicator,
  StatusText,
} from "./styled";

interface Tecnico {
  id: string;
  nome: string;
  status: "trabalhando" | "almoco" | "offline" | "manutencao";
}

interface SearchHeaderProps {
  onSearch?: (query: string) => void;
  onFilterTecnico?: (status: string) => void;
  tecnicoSelecionado?: Tecnico | null;
}

export default function SearchHeader({
  onSearch,
  onFilterTecnico,
  tecnicoSelecionado,
}: SearchHeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filtroAtivo, setFiltroAtivo] = React.useState<string>("todos");

  const statusTecnico = [
    { id: "todos", label: "Todos", cor: "#6B7280" },
    { id: "trabalhando", label: "Trabalhando", cor: "#7BC142" },
    { id: "almoco", label: "Almoço", cor: "#F59E0B" },
    { id: "manutencao", label: "Manutenção", cor: "#3B82F6" },
    { id: "offline", label: "Offline", cor: "#EF4444" },
  ];

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  const handleFilterChange = (status: string) => {
    setFiltroAtivo(status);
    onFilterTecnico?.(status);
  };

  const getStatusInfo = (status: string) => {
    const statusMap: Record<string, { label: string; cor: string }> = {
      trabalhando: { label: "Trabalhando", cor: "#7BC142" },
      almoco: { label: "Em Almoço", cor: "#F59E0B" },
      offline: { label: "Offline", cor: "#EF4444" },
      manutencao: { label: "Em Manutenção", cor: "#3B82F6" },
    };
    return statusMap[status] || { label: "Desconhecido", cor: "#6B7280" };
  };

  return (
    <Container>
      {/* Barra de Busca */}
      <SearchContainer>
        <SearchInput
          placeholder="Buscar por veículo ou técnico..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        <SearchButton onPress={handleSearch} activeOpacity={0.7}>
          <MaterialIcons name="search" size={RFValue(20)} color="#7BC142" />
        </SearchButton>
      </SearchContainer>

      {/* Status do Técnico Selecionado */}
      {tecnicoSelecionado && (
        <StatusContainer>
          <StatusIndicator cor={getStatusInfo(tecnicoSelecionado.status).cor} />
          <StatusText>
            {tecnicoSelecionado.nome} -{" "}
            {getStatusInfo(tecnicoSelecionado.status).label}
          </StatusText>
        </StatusContainer>
      )}

      {/* Filtros de Status */}
      <FilterContainer>
        {statusTecnico.map((status) => (
          <FilterButton
            key={status.id}
            ativo={filtroAtivo === status.id}
            cor={status.cor}
            onPress={() => handleFilterChange(status.id)}
            activeOpacity={0.8}
          >
            <FilterText ativo={filtroAtivo === status.id}>
              {status.label}
            </FilterText>
          </FilterButton>
        ))}
      </FilterContainer>
    </Container>
  );
}
