import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './App.css'
import Theme, { Themes } from './components/Theme'

type ContactProps = {
    windowWidth: number
    windowHeight: number
}

export const Contact = (props: ContactProps) => {
    const rows = Math.round(0.01 * props.windowHeight)
    return (
        <form
            style={{ display: 'flex', flexDirection: 'column' }}
            id="contact"
            action="https://formspree.io/ben.mitchell01+willbenmitch@gmail.com"
            method="POST"
            accept-charset="utf-8"
        >
            <h1>Contact</h1>
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

export const Logo = (props: { src: string; onIn: boolean; onEntered: () => void; display?: string }) => {
    const { src, onIn, onEntered, display } = props
    return (
        <CSSTransition in={onIn} timeout={300} classNames="logo" onEntered={onEntered}>
            <img src={src} style={{ display }} className="logo" alt="W / B / M" />
        </CSSTransition>
    )
}

export const Header = () => {
    return (
        <div>
            <h1>Software Developer</h1>
            <p>Experienced building Full Stack software applications for small-medium organizations that solve complex problems.</p>
            <h3 className="center">Front End</h3>

            <p className="light">My preferred stack include es6 JavaScript, React, React-Native, Redux, and Apollo.</p>

            <h3>Back End</h3>
            <p>Equally at home in Node or Python.</p>

            <h3 className="center">User Experience Focused</h3>

            <p className="light">I believe in building applications with the end user in mind; making sure applications are usable, useful, and accessible.</p>
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
            <h1>Portfolio</h1>
            <h3>
                <a href="https://cadencebot.com" target="_blank" rel="noopener noreferrer">
                    CadenceBot
                </a>
            </h3>
            <p>
                CadenceBot reduces complexity in the code review process by being your main point of contact for everything involving code reviews. Integrating
                with both Slack and Github, your team is now able to manage their code reviews directly in Slack.
            </p>
            <h3>
                <a href="https://georgeclooneyofpugs.com" target="_blank" rel="noopener noreferrer">
                    George Clooney of Pugs Dot Com
                </a>
            </h3>
            <p>A tribute page to my first dog, Sebastian.</p>
            <h3>
                <a href="https://github.com/willbenmitch/bugger-your-neighbour" target="_blank" rel="noopener noreferrer">
                    Bugger Your Neighbour
                </a>
            </h3>
            <p>
                A repository for hosting your own game of Bugger Your Neighbour (aka{' '}
                {
                    <a href="https://en.wikipedia.org/wiki/Oh_Hell" target="_blank" rel="noopener noreferrer">
                        Oh, Hell
                    </a>
                }
                ).
            </p>
        </div>
    )
}

export const About = () => {
    return (
        <div id="about">
            <h1>About</h1>
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
            <h1>Resume</h1>
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
    transition: boolean
}

class App extends React.Component<AppProps, AppState> {
    state = { windowWidth: 0, windowHeight: 0, theme: Themes.dark, transition: false }

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
        const newTheme = this.state.theme === Themes.dark ? Themes.light : Themes.dark
        this.setState({ theme: newTheme, transition: true })
    }

    render() {
        return (
            <div>
                <Theme theme={this.state.theme} />
                <button onClick={this.toggleTheme}>Dark Mode {this.state.theme === Themes.dark ? 'Off' : 'On'}</button>
                {}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} id="navigation">
                    <Navigation />
                    <Logo
                        src="logo-dark-transparent.png"
                        display={this.state.theme === Themes.light ? 'none' : undefined}
                        onIn={this.state.transition}
                        onEntered={() => this.setState({ transition: false })}
                    />
                    <Logo
                        src="logo-transparent.png"
                        display={this.state.theme === Themes.dark ? 'none' : undefined}
                        onIn={this.state.transition}
                        onEntered={() => this.setState({ transition: false })}
                    />
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
