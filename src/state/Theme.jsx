import React from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    lightModeHandle: () => { },
    darkModeHandle: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return React.useContext(ThemeContext);
}