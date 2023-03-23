export const languages = ['en'] as const

export type LangugesType = (typeof languages)[number]
