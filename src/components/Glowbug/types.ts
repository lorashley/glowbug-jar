export interface Glowbug {
  id: string
  kind: GlowbugKind
}

export enum GlowbugKind {
  PEE = 'PEE',
  POOP = 'POOP',
  LOVE = 'LOVE',
  STAR = 'STAR',
}
