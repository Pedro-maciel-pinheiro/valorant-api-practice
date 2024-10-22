import { CustomCardSkinWrapper } from "@/components/custom/customcard-skin-wrapper";
import { LoadingLogo } from "@/components/loading/loading-logo";
import { SearchParamsProps } from "@/types";
import React, { Suspense } from "react";

export default function WeaponFilterSkin({
  searchParams,
}: SearchParamsProps) {
  const skin_name = searchParams;

  return (
    <>
      <Suspense fallback={<LoadingLogo/>}>
        <CustomCardSkinWrapper searchParams={skin_name} />
      </Suspense>
    </>
  );
}
