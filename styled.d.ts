import "styled-components/native";

interface Tema {
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
    sm: object;
    md: object;
    lg: object;
  };
}

declare module "styled-components/native" {
  export interface DefaultTheme extends Tema {}
}
