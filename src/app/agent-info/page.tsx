import { CustomCardInformationWrapper } from "@/components/custom/customcard-information-wrapper";
import { HomeVideo } from "@/components/home/home-video";
import { LoadingSpin } from "@/components/loading/loading-spin";

import { SearchParamsProps } from "@/types";

import React, { Suspense } from "react";

export default function AgentInformation({ searchParams }: SearchParamsProps) {
  const { name } = searchParams;
  return (
    <>
      <Suspense fallback={<LoadingSpin />}>
        <CustomCardInformationWrapper
          searchParams={{
            name: name,
          }}
        />
      </Suspense>
    </>
  );
}
