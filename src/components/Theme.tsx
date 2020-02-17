import React from 'react'

export type ThemeType = {
    colorPrimary: string
    colorSecondary: string
    colorSurface: string
    colorBackground: string
}

export enum Themes {
    dark = 'dark',
    light = 'light',
}

const themes: { dark: ThemeType; light: ThemeType } = {
    dark: {
        colorPrimary: 'teal',
        colorSecondary: 'grey',
        colorSurface: 'white',
        colorBackground: 'black',
    },
    light: {
        colorPrimary: 'teal',
        colorSecondary: 'grey',
        colorSurface: 'black',
        colorBackground: 'white',
    },
}

export type Props = {
    theme: Themes
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
        return null
    }
}

export default Theme
