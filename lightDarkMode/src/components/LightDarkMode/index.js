// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    containerMode: 'container1',
    headingMode: 'heading1',
    btnText: 'Light Mode',
  }

  onChangeMode = () => {
    this.setState(prevState => {
      let result
      if (prevState.isDarkMode === true) {
        result = {
          isDarkMode: false,
          containerMode: 'container2',
          headingMode: 'heading2',
          btnText: 'Dark Mode',
        }
      } else {
        result = {
          isDarkMode: true,
          containerMode: 'container1',
          headingMode: 'heading1',
          btnText: 'Light Mode',
        }
      }
      return result
    })
  }

  render() {
    const {containerMode, headingMode, btnMode, btnText} = this.state
    console.log(containerMode)

    return (
      <div className="bg-container">
        <div className={containerMode}>
          <h1 className={headingMode}>Click To Change Mode</h1>
          <button className="button1" onClick={this.onChangeMode} type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
