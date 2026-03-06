import { Country } from "../../types";
import { getAllCountries, getCountriesByRegion } from "./countries";

export async function getCountries(region?: string): Promise<Country[]> {
  if (region && region !== "all") {
    return getCountriesByRegion(region);
  }
  return getAllCountries();
}