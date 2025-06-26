import { createContext, type ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/apiClient";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { toast } from "react-toastify/unstyled";

// Tipos principais
type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<boolean>;
  signOut: () => boolean;
  signUp: (credentials: SignUpClienteProps | SignUpEmpresaProps) => Promise<boolean>;
};

type UserType = 'cliente' | 'empresa';

type UserProps = {
  id: number;
  nome: string;
  email: string;
  type: UserType;
};

// Cliente
export type SignUpClienteProps = {
  nome: string;
  email: string;
  senha: string;
  type?: 'cliente';
};

// Empresa
export type SignUpEmpresaProps = {
  nome: string;
  email: string;
  senha: string;
  porte: 'PEQUENA' | 'MEDIA' | 'GRANDE';
  horarioInicioDisponibilidade: Time;
  horarioFimDisponibilidade: Time;
  raAtuacao: string;
  mediaPrecoMudancaPequena: number;
  mediaPrecoMudancaMedia: number;
  mediaPrecoMudancaGrande: number;
  type?: 'empresa';
};

type Time = {
  hour: number;
  minute: number;
  second: number;
  nano: number;
};

type SignInProps = {
  email: string;
  senha: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@auth.token': token } = parseCookies();

    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      api.get('/me')
        .then(response => {
          const { id, nome, email, type } = response.data;
          setUser({ id, nome, email, type });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  function signOut(): boolean {
    try {
      destroyCookie(undefined, '@auth.token');
      setUser(null);
      window.location.href = '/';
      return true;
    } catch {
      return false;
    }
  }

  async function signIn({ email, senha }: SignInProps): Promise<boolean> {
    try {
      const response = await api.post('/login', { email, senha });
      const { token, id, nome, type } = response.data;

      setCookie(undefined, '@auth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });

      setUser({ id, nome, email, type });
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      toast.success("Login realizado com sucesso!");
      return true;
    } catch {
      toast.error("Erro ao fazer login.");
      return false;
    }
  }

  async function signUp(credentials: SignUpClienteProps | SignUpEmpresaProps): Promise<boolean> {
    try {
      if (credentials.type === 'cliente') {
        await api.post('/clientes', credentials);
      } else {
        await api.post('/empresas', credentials);
      }

      toast.success("Conta criada com sucesso!");
      return true;
    } catch {
      toast.error("Erro ao criar conta.");
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa estar dentro de um AuthProvider");
  }
  return context;
};
