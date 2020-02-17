import React from 'react'
import './App.css'
import Theme, { Props as ThemeProps, Themes } from './components/Theme'

type ContactProps = {
    windowWidth: number
    windowHeight: number
}

export const Contact = (props: ContactProps) => {
    // const cols = Math.round(0.12 * props.windowWidth)
    const rows = Math.round(0.01 * props.windowHeight)
    return (
        <form
            style={{ display: 'flex', flexDirection: 'column' }}
            id="contact"
            action="https://formspree.io/ben.mitchell01+willbenmitch@gmail.com"
            method="POST"
            accept-charset="utf-8"
        >
            <h2>Contact</h2>
            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
                <input type="text" name="_replyto" placeholder="Email" />
                <textarea name="subject" rows={rows} placeholder="Write me a message" />
                <button type="submit" name="submit" className="btn">
                    Submit
                </button>
            </div>
        </form>
    )
}

export const Logo = (props: { src: string }) => {
    return <img src={props.src} style={{ maxWidth: '50%' }} />
}

export const Header = () => {
    return (
        <div>
            <h2>Software Developer</h2>
            <p>Experienced building Full Stack software applications for small-medium organizations that solve complex problems.</p>
        </div>
    )
}
export const Navigation = () => {
    return (
        <ul>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
        </ul>
    )
}

export const Portfolio = () => {
    return (
        <div id="portfolio">
            <h2>Portfolio</h2>
            <h4>CadenceBot</h4>
            <p>
                <a href="https://cadencebot.com" target="_blank" rel="noopener noreferrer">
                    CadenceBot
                </a>{' '}
                reduces complexity in the code review process by being your main point of contact for everything involving code reviews. Integrating with both
                Slack and Github, your team is now able to manage their code reviews directly in Slack.
            </p>
        </div>
    )
}

export const About = () => {
    return (
        <div id="about">
            <h2>About</h2>
            <h4 className="center">Front End</h4>

            <p className="light">My preferred stack include es6 JavaScript, React, React-Native, Redux, and Apollo.</p>

            <h4>Back End</h4>
            <p>Equally at home in Node or Python.</p>

            <h4 className="center">User Experience Focused</h4>

            <p className="light">I believe in building applications with the end user in mind; making sure applications are usable, useful, and accessible.</p>
            <h4 className="center">Lifelong Learner</h4>

            <p className="light">
                Formerly an operations manager in the technology sector, I was drawn to the world of development when I embarked on building a company of my own
                in 2016. I strive to always be building on past experiences.
            </p>
        </div>
    )
}

export const Resume = () => {
    return (
        <a href="files/BenMitchell_Resume-WebDeveloper-trimmed.pdf" target="_blank" rel="noopener noreferrer" id="resume">
            <h2>Resume</h2>
        </a>
    )
}

export const Footer = () => {
    return (
        <div>
            <br />
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/willbenmitchell/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/willbenmitch" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/WillBenMitchell" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
            </ul>
            <br />
            <p style={{ fontSize: 12, opacity: 0.6 }}>Ben Mitchell - {new Date().getFullYear()}</p>
        </div>
    )
}

type AppProps = {}
type AppState = {
    windowWidth: number
    windowHeight: number
    theme: Themes
}

class App extends React.Component<AppProps, AppState> {
    state = { windowWidth: 0, windowHeight: 0, theme: Themes.dark }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions = () => {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
    }

    toggleTheme = () => {
        const newTheme = this.state.theme == Themes.dark ? Themes.light : Themes.dark
        this.setState({ theme: newTheme })
    }

    render() {
        const logoSrc = this.state.theme == Themes.dark ? 'logo-dark.png' : 'logo.png'
        return (
            <div>
                <Theme theme={this.state.theme} />
                <button onClick={this.toggleTheme}>Toggle Theme</button>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} id="navigation">
                    <Navigation />
                    <Logo src={logoSrc} />
                </div>
                <Header />
                <Portfolio />
                <About />
                <Contact windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} />
                <Resume />
                <Footer />
            </div>
        )
    }
}

export default App
