"use client";

import { Country } from "../../types";
import { useRouter } from "next/navigation";
import "./page.css";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/country/${country.name.common}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src={country.flags.png}
        alt={country.flags.alt ?? `Flag of ${country.name.common}`}
      />
      <h2>{country.name.common}</h2>
      <p>Población: {country.population.toLocaleString()}</p>
    </div>
  );
}