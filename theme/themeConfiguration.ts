import {Color, colors} from "./colors";

export enum ThemeMode {
    Dark = 'dark',
    Light = 'light',
    System = '',
}

type Palette = {
    bgWhite: Color

    textWhite: Color
    textGray: Color
    textDark: Color
};

export type ThemeConfiguration = {
    themeMode: ThemeMode
    palette: Palette
    fontFamily: Object
    grids: {
        sm: any,
        md: any,
        lg: any,
    },
    breakpoints: {
        sm: string,
        md: string,
        lg: string,
        xl: string,
        '2xl': string,
        '3xl': string,
    }
    zIndex: Object
}

const palette: Palette = {
    bgWhite: colors.white,

    textDark: colors.gray900,
    textGray: colors.gray500,
    textWhite: colors.white,
}

const paletteDark: Palette = {
    bgWhite: colors.gray900,

    textDark: colors.gray100,
    textGray: colors.gray200,
    textWhite: colors.gray900,
}

const configuration: ThemeConfiguration = {
    themeMode: ThemeMode.Light,
    palette,
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    grids: {
        sm: 8,
        md: 12,
        lg: 24,
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
    },
    zIndex: {
        base: 0,
        content: 1,
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalOverlay: 1040,
        modal: 1060,
        popover: 1070,
        tooltip: 1080,
    }
}

export function getThemeConfiguration(themeMode: ThemeMode = ThemeMode.Light) {
    let p = palette
    if (themeMode == ThemeMode.Dark) p = paletteDark

    return {...configuration, palette: {...p}, themeMode}
}