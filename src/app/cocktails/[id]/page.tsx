import type { Cocktail } from "../../../types";
import { getCocktailsByID } from "../../../lib/api/cocktails";
import "./page.css";

interface Props {
  params: {
    id: string;
  };
}

export default async function CocktailDetailPage({ params }: Props) {
  const decodedId = decodeURIComponent(params.id);

  let cocktail: Cocktail | null = null;

  try {
    const cocktails = await getCocktailsByID(decodedId);
    cocktail = cocktails?.[0] ?? null;
  } catch {
    return (
      <div className="detail">
        <p>No se encontró el cocktail.</p>
      </div>
    );
  }

  if (!cocktail) {
    return (
      <div className="detail">
        <p>No se encontró el cocktail.</p>
      </div>
    );
  }

  return (
    <div className="detail">
      <h1>{cocktail.strDrink}</h1>

      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />

      <p>{cocktail.strInstructions}</p>
    </div>
  );
}