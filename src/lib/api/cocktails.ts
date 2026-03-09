import api from "./api";
import type { Cocktail } from "../../types";

interface CocktailResponse {
  drinks: Cocktail[] | null;
}

export async function getAllCocktails(): Promise<Cocktail[]> {
  const { data } = await api.get<CocktailResponse>("/search.php?s=");
  return data.drinks ?? [];
}

export async function getCocktailsByID(id: string): Promise<Cocktail[]> {
  const { data } = await api.get<CocktailResponse>(`/lookup.php?i=${id}`);
  return data.drinks ?? [];
}