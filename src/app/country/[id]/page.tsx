import { getCountryByName } from "../../../lib/api/countries";
import "./page.css";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CountryDetailPage({ params }: Props) {
  const { id } = await params;
  const decodedName = decodeURIComponent(id);

  let country;
  try {
    country = await getCountryByName(decodedName);
  } catch {
    return (
      <div className="detail">
        <p>No se encontró el país.</p>
        <a href="/">← Volver a la lista</a>
      </div>
    );
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <div className="detail">
      <a href="/">← Volver a la lista</a>

      <h1>{country.name.official}</h1>
      <img
        src={country.flags.png}
        alt={country.flags.alt ?? `Flag of ${country.name.common}`}
      />

      <div className="info">
        <p><strong>Nombre común:</strong> {country.name.common}</p>
        <p><strong>Capital:</strong> {country.capital?.join(", ") ?? "N/A"}</p>
        <p><strong>Región:</strong> {country.region}</p>
        <p><strong>Subregión:</strong> {country.subregion ?? "N/A"}</p>
        <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Idiomas:</strong> {languages}</p>
        <p><strong>Monedas:</strong> {currencies}</p>
      </div>
    </div>
  );
}