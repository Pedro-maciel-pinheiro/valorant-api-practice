import { GetApiDataWeaponsSkin } from "@/services/api";
import { SearchParamsProps, WeaponSkin } from "@/types";
import React from "react";
import { CustomCardSkinDisplay } from "@/components/custom/customcard-skin-display";

export const CustomCardSkinWrapper = async ({
  searchParams,
}: SearchParamsProps) => {
  const { name } = searchParams;
  const skin_api_data: WeaponSkin[] = await GetApiDataWeaponsSkin();

  const selectedSkin = skin_api_data.find((skin) => skin.displayName === name);

  if (!selectedSkin) {
    return <div className="text-4xl text-white">Skin not Found</div>;
  }

  return <CustomCardSkinDisplay skinData={[selectedSkin]} />;
};
