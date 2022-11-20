import 'styled-components';
import {ThemeConfiguration} from "./themeConfiguration";

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeConfiguration {}
}