// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  buttonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const getButtonText = this.buttonText()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="welcome-line">Thank you! Happy Learning</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onSubscribe}>
            {getButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
