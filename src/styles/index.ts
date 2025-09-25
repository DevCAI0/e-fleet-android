// styles/index.ts
// Tema do E-Fleet baseado no Design System
export const tema = {
  // Mantém compatibilidade com código existente
  colors: {
    // Textos
    primaryText: "#FFFFFF",
    secondaryText: "#9CA3AF",

    // Fundos
    background: "#111827",
    backgroundLight: "#1F2937",

    // Bordas
    borderColor: "#6B7280",

    // Botões
    primaryButton: "#7BC142",
    secondaryButton: "#4B5563",
    denounceButton: "#EF4444",
  },
  cores: {
    primaria: {
      principal: "#7BC142",
      escura: "#059669",
      clara: "#DCFCE7",
      contraste: "#FFFFFF",
    },
    secundaria: {
      principal: "#3B82F6",
      escura: "#1E40AF",
      clara: "#EBF8FF",
      contraste: "#FFFFFF",
    },
    sucesso: {
      principal: "#059669",
      escura: "#047857",
      clara: "#D1FAE5",
      contraste: "#FFFFFF",
    },
    aviso: {
      principal: "#F59E0B",
      escura: "#D97706",
      clara: "#FEF3C7",
      contraste: "#FFFFFF",
    },
    erro: {
      principal: "#EF4444",
      escura: "#DC2626",
      clara: "#FEE2E2",
      contraste: "#FFFFFF",
    },
    neutras: {
      900: "#111827",
      800: "#1F2937",
      700: "#374151",
      600: "#4B5563",
      500: "#6B7280",
      400: "#9CA3AF",
      300: "#D1D5DB",
      200: "#E5E7EB",
      100: "#F3F4F6",
      50: "#F9FAFB",
      branco: "#FFFFFF",
    },
    fundo: {
      primario: "#FFFFFF",
      secundario: "#F9FAFB",
      terciario: "#F3F4F6",
    },
  },
  tipografia: {
    familiaFonte: {
      primaria: "Inter",
      alternativa: "System",
    },
    pesosFonte: {
      regular: "400",
      medio: "500",
      semiBold: "600",
      negrito: "700",
    },
    tamanhos: {
      h1: 24,
      h2: 18,
      h3: 16,
      corpoGrande: 16,
      corpoRegular: 14,
      corpoPequeno: 12,
      legenda: 10,
    },
  },
  espacamento: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
    "5xl": 48,
  },
  bordaRaio: {
    nenhum: 0,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    "2xl": 16,
    completo: 50,
  },
  sombras: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 1,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};

export type Tema = typeof tema;
