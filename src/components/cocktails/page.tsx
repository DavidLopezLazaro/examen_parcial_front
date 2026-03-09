"use client";

import { useRouter } from "next/navigation";
import type { Cocktail } from "../../types";
import "./page.css";


export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cocktails/${cocktail.idDrink}`);
  };

  return (
    <button type="button" className="card" onClick={handleClick}>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />

      <h2>{cocktail.strDrink}</h2>
    </button>
  );
}