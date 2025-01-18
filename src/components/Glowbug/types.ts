export interface Glowbug {
  id: string
  kind: GlowbugKind
}

export enum GlowbugKind {
  POTTY = 'POTTY',
  LOVE = 'LOVE',
  STAR = 'STAR',
}
