import { GetApiData } from "@/services/api";
import { CharacterDataProps, SearchParamsAgentsProps } from "@/types";
import React from "react";
import { CustomCardAgents } from "./customcard-agents";

export default async function CustomCardAgentsWrapper({
  searchParams,
}: SearchParamsAgentsProps) {
  const role = searchParams.role;
  const data: CharacterDataProps[] = await GetApiData();
  const playableAgent =
    data?.filter(
      (character) =>
        character?.isPlayableCharacter === true &&
        (role === "All" ||  character?.role?.displayName === role),
    ) || [];

  return <CustomCardAgents agents={playableAgent} role={role} />;
}
