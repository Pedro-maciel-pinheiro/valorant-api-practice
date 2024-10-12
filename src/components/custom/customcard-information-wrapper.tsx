import { GetApiData } from "@/services/api";
import { CharacterDataProps, SearchParamsProps } from "@/types";
import React from "react";
import { CustomCardAgentInfo } from "./customcard-information";

export const CustomCardInformationWrapper = async ({
  searchParams,
}: SearchParamsProps) => {
  const { name } = searchParams;
  const agents_info = await GetApiData();

  const agent = agents_info.find(
    (agent: CharacterDataProps) =>
      agent.displayName === name && agent.isPlayableCharacter === true,
  );

  if (!agent) {
    return (
      <div className="text-8xl flex min-h-screen w-full items-center justify-center bg-black text-white">
        agent not found{" "}
      </div>
    );
  }
  return <CustomCardAgentInfo agentInfo={agent} />;
};
