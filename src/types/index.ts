

export type SearchParamsProps = {
  searchParams: {
    name?: string;
  };
};
export type SearchParamsAgentsProps = {
  searchParams: {
    role?: string;
  };
};

export type AgentsProps = {
  agents: CharacterDataProps[]
}

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface CharacterDataProps {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  recruitmentData: any | null;
  abilities: Ability[];
  voiceLine: any | null;
}

export type AgentsDataProps = {
  agents: CharacterDataProps[];
  role:string | undefined
};

interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: string | null;
  altFireType: string;
  adsStats: {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;
  };
  altShotgunStats: any | null;
  airBurstStats: any | null;
  damageRanges: {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
  }[];
}

interface ShopData {
  cost: number;
  category: string;
  shopOrderPriority: number;
  categoryText: string;
  gridPosition: {
    row: number;
    column: number;
  };
  canBeTrashed: boolean;
  image: string | null;
  newImage: string;
  newImage2: string | null;
  assetPath: string;
}

interface WeaponChroma {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullRender: string;
  swatch: string | null;
  streamedVideo: string | null;
  assetPath: string;
}

interface WeaponLevel {
  uuid: string;
  displayName: string;
  levelItem: string | null;
  displayIcon: string;
  streamedVideo: string | null;
  assetPath: string;
}

interface WeaponSkin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string | null;
  assetPath: string;
  chromas: WeaponChroma[];
  levels: WeaponLevel[];
}

export interface WeaponDataProps {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats;
  shopData: ShopData;
  skins: WeaponSkin[];
}
