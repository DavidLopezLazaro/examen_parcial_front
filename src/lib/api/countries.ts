import api from "./api";
import { Country } from "../../types";

export async function getAllCountries(): Promise<Country[]> {
  const { data } = await api.get<Country[]>(
    "/all?fields=name,flags,population,region,subregion,capital,languages,currencies,cca3"
  );
  return data;
}

export async function getCountriesByRegion(region: string): Promise<Country[]> {
  const { data } = await api.get<Country[]>(
    `/region/${region}?fields=name,flags,population,region,subregion,capital,languages,currencies,cca3`
  );
  return data;
}

export async function getCountryByName(name: string): Promise<Country> {
  const { data } = await api.get<Country[]>(
    `/name/${name}?fields=name,flags,population,region,subregion,capital,languages,currencies,cca3`
  );
  return data[0];
}