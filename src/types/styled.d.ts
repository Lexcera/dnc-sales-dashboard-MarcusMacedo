import 'styled-components'
import type { Theme } from './theme'

declare module 'styled-components' {
  // agora o eslint não reclama
  export type DefaultTheme = Theme
}
