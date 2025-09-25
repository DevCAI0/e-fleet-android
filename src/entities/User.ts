export interface User {
  id: number;
  nome: string;
  login: string;
  setor_user: string;
  ativo: boolean;
  permissoes: string[];
}
