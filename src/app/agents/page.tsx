import { LoadingLogo } from "@/components/loading/loading-logo";

import React, { Suspense } from "react";
import { SearchParamsAgentsProps } from "@/types";

import CustomCardAgentsWrapper from "@/components/custom/customcard-wrapper";

export default function Agents({ searchParams }: SearchParamsAgentsProps) {
  const role_params = searchParams.role;

  return (
    <section className="flex h-full w-full items-center justify-center">
      <Suspense fallback={<LoadingLogo />}>
        <CustomCardAgentsWrapper
          searchParams={{
            role: role_params,
          }}
        />
      </Suspense>
    </section>
  );
}
