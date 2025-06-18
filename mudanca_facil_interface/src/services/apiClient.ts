import { setupAPIClient } from "./api";
// TODO: importar contexto quando for feito

export const api = setupAPIClient(); 

// hook pra lidar com signout futuramente
export function useAPIClient() {
  // TODO: importar signOut quando existir
  return setupAPIClient(undefined); // TODO: retornar `signOut` alem de undefined
}