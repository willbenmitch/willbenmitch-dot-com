import React from 'react'
import './App.css'

type NameFormProps = {
    windowWidth: number
    windowHeight: number
}

export const NameForm = (props: NameFormProps) => {
    const cols = Math.round(0.05 * props.windowWidth)
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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* Labels */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>First Name</label>
                    <label>Last Name</label>
                    <label>Email</label>
                    <label>Write me a message</label>
                </div>
                {/* Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" name="lastName" />
                    <input type="text" name="firstName" />
                    <input type="text" name="_replyto" />
                    <textarea name="subject" rows={rows} cols={cols} />
                    <input type="submit" name="submit" className="btn" />
                </div>
            </div>
        </form>
    )
}

export const Header = () => {
    return (
        <div>
            <h1>WILLBENMITCH</h1>
            <h2>Software Developer</h2>
            <h5>Experienced in React, React Native, Redux, GraphQL, Apollo, and Node</h5>
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
                <a href="files/BenMitchell_Resume-WebDeveloper-trimmed.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
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
            <h4 className="center">Full Stack</h4>

            <p className="light">
                My competencies include es6 javascript, react, react-native, redux, graphql, apollo, and node. I have experience working with relational and
                non-relational databases and building RESTful APIs.
            </p>

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

export const Footer = () => {
    return (
        <div>
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
            <div>Ben Mitchell - {new Date().getFullYear()}</div>
        </div>
    )
}

type AppProps = {}
type AppState = {
    windowWidth: number
    windowHeight: number
}

class App extends React.Component<AppProps, AppState> {
    state = { windowWidth: 0, windowHeight: 0 }

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

    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Portfolio />
                <About />
                <NameForm windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} />
                <Footer />
            </div>
        )
    }
}

export default App
