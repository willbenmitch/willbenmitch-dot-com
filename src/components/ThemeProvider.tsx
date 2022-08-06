import React, { useContext, useMemo, ElementType, Context } from 'react';

export type ThemeValues = {
    colorPrimary: string
    colorSecondary: string
    colorSurface: string
    colorBackground: string
    colorAccent: string
}

export enum Theme {
    dark = 'dark',
    light = 'light',
}

export enum Color {
    dark = 'rgb(25, 26, 26)',
    black = 'black',
    teal = 'teal',
    grey = 'grey',
    white = 'white',
    cadencePrimary = '#496285',
}

const themes: { dark: ThemeValues; light: ThemeValues } = {
    dark: {
        colorPrimary: Color.teal,
        colorSecondary: Color.cadencePrimary,
        colorSurface: Color.white,
        colorBackground: Color.dark,
        colorAccent: Color.white,
    },
    light: {
        colorPrimary: Color.teal,
        colorSecondary: Color.cadencePrimary,
        colorSurface: Color.dark,
        colorBackground: Color.white,
        colorAccent: Color.white,
    },
}

type Props = {
    children?: ElementType,
};

export const ThemeContext = React.createContext(Theme.dark)

export const ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */
export default function ThemeProvider(props: Props) {
    const theme = useContext(ThemeContext);

    if (!props.children) {
        return null;
    }

    return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>

}