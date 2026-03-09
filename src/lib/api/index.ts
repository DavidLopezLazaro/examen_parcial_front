import { Cocktail } from "../../types";
import { getAllCocktails, getCocktailsByID } from "./cocktails";

export async function getCocktails(idDrink?: string): Promise<Cocktail[]> {
  if (idDrink && idDrink !== "all") {
    return getCocktailsByID(idDrink);
  }

  return getAllCocktails();
}