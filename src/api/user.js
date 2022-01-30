import { ENLACE_BASE } from "../utils/constants";


export async function getUsuarios() {
  try {
    const url = `${ENLACE_BASE}=usuarios`;
    const respuesta = await fetch(url);
    const result = await respuesta.json();
    return result;
  } catch (error) {
    throw error;
  }
}