/**
Convert Pixel To Rem
@param pixels - Pixels value to be converted
@returns The Converted rem Value
*/

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
