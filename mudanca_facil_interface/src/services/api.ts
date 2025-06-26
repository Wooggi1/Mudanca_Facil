import axios, { AxiosError } from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "./errors/AuthErrorToken";

// Função para configurar uma instância do Axios com autenticação via token
export function setupAPIClient(ctx = undefined, signOut?: () => void) { // TODO: adicionar signout como parametro
  // Lê os cookies (no lado do servidor ou cliente)
  const cookies = parseCookies(ctx);

  // Cria a instância do Axios com configurações padrão
  const api = axios.create({
    baseURL: "https://mudanca-facil-api.onrender.com",
    headers: {
      // Se houver um token nos cookies, adiciona no header Authorization
      Authorization: cookies['@auth.token'] ? `Bearer ${cookies['@auth.token']}` : ""
    },
    withCredentials: true, // Garante que cookies de sessão sejam enviados com as requisições
  });

  // Interceptador de respostas para lidar com erros
  api.interceptors.response.use(
    (response) => {
      return response; 
    },
    (error: AxiosError) => {
      // Verifica se o erro é de autorização (usuário não autenticado)
      if (error.response?.status === 401) {
        // Se estiver no lado do cliente (navegador)
        if (typeof window !== "undefined") {
          if (signOut) {
            signOut();
          }
        } else {
          // Se estiver no lado do servidor, remove o cookie de autenticação
          destroyCookie(ctx, "@auth.token"); 
          return Promise.reject(new AuthTokenError()); // TODO: Retornar um erro de autenticação aqui futuramente
        }
      }

      // Propaga o erro para ser tratado onde a requisição foi feita
      return Promise.reject(error);
    }
  );

  return api;
}
