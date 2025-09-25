import React from "react";
import { Alert, Vibration } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  VehicleInfo,
  VehicleNumber,
  TechnicianName,
  StatusBadge,
  StatusText,
  ButtonContainer,
  ActionButton,
  ButtonText,
  ProximityIndicator,
  ProximityText,
} from "./styled";

interface VehicleAlertProps {
  veiculo: {
    id: string;
    numero: string;
    tecnico: string;
    statusTecnico: "trabalhando" | "almoco" | "offline" | "manutencao";
    proximidade?: number; // em metros
    latitude: number;
    longitude: number;
  };
  onScheduleMaintenance?: (vehicleId: string) => void;
  onDismiss?: () => void;
}

export default function VehicleAlert({
  veiculo,
  onScheduleMaintenance,
  onDismiss,
}: VehicleAlertProps) {
  const [isNearby, setIsNearby] = React.useState(false);

  React.useEffect(() => {
    // Simular verificação de proximidade
    if (veiculo.proximidade && veiculo.proximidade < 100) {
      setIsNearby(true);
      // Vibrar quando estiver próximo
      Vibration.vibrate([0, 500, 200, 500]);
    }
  }, [veiculo.proximidade]);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      trabalhando: "#7BC142",
      almoco: "#F59E0B",
      offline: "#EF4444",
      manutencao: "#3B82F6",
    };
    return colors[status] || "#6B7280";
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      trabalhando: "Trabalhando",
      almoco: "Em Almoço",
      offline: "Offline",
      manutencao: "Em Manutenção",
    };
    return labels[status] || "Desconhecido";
  };

  const handleSchedule = () => {
    Alert.alert(
      "Agendar Manutenção",
      `Deseja agendar manutenção para o veículo ${veiculo.numero}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Agendar",
          onPress: () => {
            onScheduleMaintenance?.(veiculo.id);
            onDismiss?.();
          },
        },
      ]
    );
  };

  const handleCall = () => {
    Alert.alert(
      "Chamar Técnico",
      `Chamar ${veiculo.tecnico} para este local?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Chamar",
          onPress: () => {
            // Implementar lógica de chamada
            console.log("Chamando técnico:", veiculo.tecnico);
            onDismiss?.();
          },
        },
      ]
    );
  };

  return (
    <Container>
      {/* Indicador de Proximidade */}
      {isNearby && (
        <ProximityIndicator>
          <MaterialIcons name="near-me" size={RFValue(16)} color="#7BC142" />
          <ProximityText>
            Veículo próximo ({veiculo.proximidade}m)
          </ProximityText>
        </ProximityIndicator>
      )}

      {/* Informações do Veículo */}
      <VehicleInfo>
        <VehicleNumber>Veículo {veiculo.numero}</VehicleNumber>
        <TechnicianName>Técnico: {veiculo.tecnico}</TechnicianName>

        <StatusBadge cor={getStatusColor(veiculo.statusTecnico)}>
          <StatusText>{getStatusLabel(veiculo.statusTecnico)}</StatusText>
        </StatusBadge>
      </VehicleInfo>

      {/* Botões de Ação */}
      <ButtonContainer>
        <ActionButton
          tipo="primary"
          onPress={handleSchedule}
          activeOpacity={0.8}
        >
          <MaterialIcons name="schedule" size={RFValue(16)} color="#FFFFFF" />
          <ButtonText tipo="primary">Agendar</ButtonText>
        </ActionButton>

        <ActionButton tipo="secondary" onPress={handleCall} activeOpacity={0.8}>
          <MaterialIcons name="phone" size={RFValue(16)} color="#7BC142" />
          <ButtonText tipo="secondary">Chamar</ButtonText>
        </ActionButton>

        <ActionButton tipo="dismiss" onPress={onDismiss} activeOpacity={0.8}>
          <MaterialIcons name="close" size={RFValue(16)} color="#6B7280" />
        </ActionButton>
      </ButtonContainer>
    </Container>
  );
}
