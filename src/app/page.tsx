"use client";

import { useEffect, useState } from "react";
import type { Cocktail } from "../types";
import { getAllCocktails } from "../lib/api/cocktails";
import styles from "./page.module.css";
import "./page.css";
import CocktailCard from "../components/cocktails/page";

export default function HomePage() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCocktails() {
      const data = await getAllCocktails();
      setCocktails(data);
      setLoading(false);
    }

    loadCocktails();
  }, []);

  const filteredCocktails = cocktails.filter((c) =>
    c.strDrink.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Explorador de Cócteles</h1>

      <div className="controls">
        <input
          className={styles.input}
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Cargando cócteles...</p>
      ) : (
        <div className="grid">
          {filteredCocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      )}
    </main>
  );
}