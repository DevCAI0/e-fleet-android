// src/types/theme.d.ts
import "styled-components/native";

// Definição do tipo do tema
export interface ITema {
  colors: {
    primaryText: string;
    secondaryText: string;
    background: string;
    backgroundLight: string;
    borderColor: string;
    primaryButton: string;
    secondaryButton: string;
    denounceButton: string;
  };
  cores: {
    primaria: {
      principal: string;
      escura: string;
      clara: string;
      contraste: string;
    };
    secundaria: {
      principal: string;
      escura: string;
      clara: string;
      contraste: string;
    };
    sucesso: {
      principal: string;
      escura: string;
      clara: string;
      contraste: string;
    };
    aviso: {
      principal: string;
      escura: string;
      clara: string;
      contraste: string;
    };
    erro: {
      principal: string;
      escura: string;
      clara: string;
      contraste: string;
    };
    neutras: {
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
      50: string;
      branco: string;
    };
    fundo: {
      primario: string;
      secundario: string;
      terciario: string;
    };
  };
  tipografia: {
    familiaFonte: {
      primaria: string;
      alternativa: string;
    };
    pesosFonte: {
      regular: string;
      medio: string;
      semiBold: string;
      negrito: string;
    };
    tamanhos: {
      h1: number;
      h2: number;
      h3: number;
      corpoGrande: number;
      corpoRegular: number;
      corpoPequeno: number;
      legenda: number;
    };
  };
  espacamento: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
    "3xl": number;
    "4xl": number;
    "5xl": number;
  };
  bordaRaio: {
    nenhum: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
    completo: number;
  };
  sombras: {
    sm: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    md: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    lg: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
}

// Extensão do módulo styled-components para incluir o tema
declare module "styled-components/native" {
  export interface DefaultTheme extends ITema {}
}

// Export do tipo para uso em outros arquivos
export type Tema = ITema;
