import 'styled-components';
import { defaultTheme } from '../style/theme/default';

type ThemeDefault = typeof defaultTheme;

declare module 'styled-components'{
  export interface DefaultTheme extends ThemeDefault {}
}