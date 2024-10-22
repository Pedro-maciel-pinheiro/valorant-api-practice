import { SearchParamsProps, WeaponSkin } from '@/types'
import React from 'react'
import CustomCardWeaponSkinFilter from './customcard-weapon-skin-filter'
import { GetApiDataWeaponsSkin } from '@/services/api'




export const CustomCardWrapperSkinFilter = async ({searchParams}:SearchParamsProps) => {
  const name = searchParams.name
  const weapon_apiData_skins: WeaponSkin[] = await GetApiDataWeaponsSkin();
  
  return <CustomCardWeaponSkinFilter searchParams={{name}} weaponSkinData={weapon_apiData_skins} />
}
