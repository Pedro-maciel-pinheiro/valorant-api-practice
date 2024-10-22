import { CustomCardWrapperSkinFilter } from "@/components/custom/customcard-wrapper-skin-filter";
import { LoadingLogo } from "@/components/loading/loading-logo";
import { SearchParamsProps} from "@/types";
import React, { Suspense } from "react";

export default function WeaponSkinDisplay({ searchParams }: SearchParamsProps) {
  const name = searchParams.name;

  return (
    <>
      <Suspense fallback={<LoadingLogo />} >
        <CustomCardWrapperSkinFilter searchParams={{
          name: name
        }}/>
      </Suspense>
    </>
  );
}
