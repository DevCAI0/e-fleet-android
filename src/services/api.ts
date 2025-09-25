// services/api.ts
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuração base da API
const API_BASE_URL = "http://192.168.0.222:8000/api";

// Criar instância do axios
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor para adicionar token automaticamente nas requisições
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("@EFleet:token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao recuperar token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas e erros
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Log de erros para debug
    console.error("API Error:", {
      status: error.response?.status,
      message: error.response?.data?.message,
      url: error.config?.url,
    });

    return Promise.reject(error);
  }
);

// Tipos para as respostas da API
export interface ApiResponse<T = any> {
  status: "success" | "error";
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Funções utilitárias para chamadas da API
export const apiService = {
  // Autenticação
  auth: {
    login: (credentials: {
      login: string;
      password: string;
      device_name?: string;
    }) =>
      api.post<ApiResponse<{ user: any; token: string; token_type: string }>>(
        "/auth/login",
        credentials
      ),

    logout: () => api.post<ApiResponse>("/auth/logout"),

    me: () => api.get<ApiResponse<{ user: any }>>("/auth/me"),

    refresh: (deviceName?: string) =>
      api.post<ApiResponse<{ token: string; token_type: string }>>(
        "/auth/refresh",
        {
          device_name: deviceName || "e-fleet-mobile-app",
        }
      ),

    checkPermission: (permission: string) =>
      api.post<ApiResponse<{ has_permission: boolean; permission: string }>>(
        "/auth/check-permission",
        { permission }
      ),
  },
};

export default api;
