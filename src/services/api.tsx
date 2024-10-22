import { CharacterDataProps, WeaponDataProps, WeaponSkin } from "@/types";

const BASE_URL_AGENTS = "https://valorant-api.com/v1/agents";
const BASE_URL_WEAPONS = "https://valorant-api.com/v1/weapons";
const BASE_URL_WEAPONS_SKINS = "https://valorant-api.com/v1/weapons/skins";

async function fetchApiData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = (await response.json()) as { data: T };
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch data from ${url}`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export const GetApiData = async (): Promise<CharacterDataProps[]> => {
  return fetchApiData<CharacterDataProps[]>(BASE_URL_AGENTS);
};

export const GetApiDataWeapons = async (): Promise<WeaponDataProps[]> => {
  return fetchApiData<WeaponDataProps[]>(BASE_URL_WEAPONS);
};

export const GetApiDataWeaponsSkin = async (): Promise<WeaponSkin[]> => {
  return fetchApiData<WeaponSkin[]>(BASE_URL_WEAPONS_SKINS);
};
