import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
// Estou guardando o valor do objeto (ex: primary, secondary, text) no ThemeType

// Agora vamos criar uma tipagem no styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// NÃO PRECISA DECORAR, BASTA TER NO GITHUB
