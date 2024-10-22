import { GetApiDataWeapons } from "@/services/api";
import { WeaponDataProps } from "@/types";
import React from "react";
import { CustomWeaponSelector } from "@/components/custom/customcard-weapons-selector";

export default async function CustomCardWrapperWeapon() {
  const weaponData: WeaponDataProps[] = await GetApiDataWeapons();
  return <CustomWeaponSelector weaponData={weaponData} />;
}
