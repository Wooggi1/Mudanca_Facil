import { setupAPIClient } from "./api";
import { useAuth } from "../context/AuthContext";

export const api = setupAPIClient(); 

// hook pra lidar com signout futuramente
export function useAPIClient() {
  const { signOut } = useAuth()
  return setupAPIClient(undefined, signOut); // TODO: retornar `signOut` alem de undefined
}