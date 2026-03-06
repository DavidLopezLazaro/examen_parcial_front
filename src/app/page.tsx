"use client";

import { useEffect, useState } from "react";
import { Country } from "../types";
import { getCountries } from "../lib/api/getCountries";
import CountryCard from "../components/country/page";
import styles from "./page.module.css";
import "./page.css";

const REGIONS = ["all", "africa", "americas", "asia", "europe", "oceania"];

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCountries(region)
      .then((data) => setCountries(data))
      .finally(() => setLoading(false));
  }, [region]);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Explorador de Países</h1>

      <div className="controls">
        <input
          className={styles.input}
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.select}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Cargando países...</p>
      ) : (
        <div className="grid">
          {filtered.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </main>
  );
}