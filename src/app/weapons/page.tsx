
import CustomCardWrapperWeapon from "@/components/custom/customcard-wrapper-weapon";
import { LoadingLogo } from "@/components/loading/loading-logo";
import React, { Suspense } from "react";


export default function Weapons() {
  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-[90%] xl:max-w-[1440px] mb-36">
        <Suspense fallback={<LoadingLogo/>}>
        <CustomCardWrapperWeapon/>
        </Suspense>
      </div>
    </div>
  );
}
