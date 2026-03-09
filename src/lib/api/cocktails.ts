import api from "./api";
import type { Cocktail } from "../../types";



export async function getAllCocktails(): Promise<Cocktail[]> {
  const { data } = await api.get< { drinks: Cocktail[] | null } >("/search.php?s=");
  return data.drinks ?? [];
}

export async function getCocktailsByID(id: string): Promise<Cocktail[]> {
  const { data } = await api.get< { drinks: Cocktail[] | null } >(`/lookup.php?i=${id}`);
  return data.drinks ?? [];
}