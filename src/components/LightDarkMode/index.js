// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  getMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getButtonText = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'content-bg-white' : 'content-bg-dark'
    const headingClassName = isLightMode ? 'heading-black' : 'heading-white'

    return (
      <div className="bg-container">
        <div className={`content-container ${modeClassName}`}>
          <h1 className={`heading ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <button onClick={this.getMode} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
