import ThemeProvider, {ThemedGlobalStyle} from "../theme";

export function LayoutDefault({ children }: { children: any }) {
    return (
        <ThemeProvider>
            <ThemedGlobalStyle />
            {children}
        </ThemeProvider>
    );
}