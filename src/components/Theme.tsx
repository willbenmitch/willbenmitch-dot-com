import React from 'react'

export type ThemeType = {
    colorPrimary: string
    colorSecondary: string
    colorSurface: string
    colorBackground: string
    colorAccent: string
}

export enum ThemeStyle {
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

const themes: { dark: ThemeType; light: ThemeType } = {
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

export type Props = {
    theme: ThemeStyle
    onChangeTheme: () => void
}
type State = {}

class Theme extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        const { theme } = props
        for (const key in themes[theme]) {
            // @ts-ignore
            const value = themes[theme][key]
            this.setThemeVariable(key, value)
        }
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { theme } = this.props
        for (const key in themes[theme]) {
            // @ts-ignore
            const value = themes[theme][key]
            this.setThemeVariable(key, value)
        }
    }

    setThemeVariable = (key: string, value: string) => {
        document.documentElement.style.setProperty(`--${key}`, value)
    }

    render() {
        const { onChangeTheme } = this.props
        return (
            <button onClick={onChangeTheme}>Dark Mode {this.props.theme === ThemeStyle.dark ? 'Off' : 'On'}</button>
        )
    }
}

export default Theme
