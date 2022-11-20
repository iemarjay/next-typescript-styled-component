import {ReactNode, useEffect, useMemo, useState} from "react";
import {createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider} from 'styled-components'
import {getThemeConfiguration, ThemeMode} from "./themeConfiguration";

export function useThemeMode() {
    const [mode, setMode] = useState<ThemeMode>();
    const STORAGE_KEY = "theme-mode";

    const setPreferredThemeMode = (mode: ThemeMode) => {
        window.localStorage.setItem(STORAGE_KEY, mode)
        setMode(mode)
    };

    useEffect(() => {
        const onDefaultThemeChange = (event: MediaQueryList | any) => {
            if (!window.localStorage.getItem(STORAGE_KEY)) {
                setMode(event.matches ? ThemeMode.Dark : ThemeMode.Light)
            }
        };

        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryList.addEventListener('change', onDefaultThemeChange)

        onDefaultThemeChange(mediaQueryList)

        return () => mediaQueryList.removeEventListener('change', onDefaultThemeChange)
    })

    return {
        mode,
        setPreferredThemeMode
    }
}

export default function ThemeProvider({children}: { children: ReactNode }) {
    const {mode} = useThemeMode()
    const themeObject = useMemo(() => getThemeConfiguration(mode), [mode])

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
  }
  
  body { background: ${({theme}) => theme.palette.bgWhite}; }

  p {
   color: ${({theme}) => theme.palette.textGray}; 
  }
  // anything else you would like to include
`;
