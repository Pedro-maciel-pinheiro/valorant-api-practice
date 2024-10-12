
import { CharacterDataProps, WeaponDataProps } from "@/types";

const BASE_URL = "https://valorant-api.com/v1/agents";

export const GetApiData = async (): Promise<CharacterDataProps[]> => {
  try {
    const response = await fetch(BASE_URL);
    await new Promise((resolve) => setTimeout(resolve,1000));

    const AgentsData = (await response.json()) as {
      data: CharacterDataProps[];
    };

    return AgentsData.data;
  } catch (error) {
    throw new Error();
  }
};


