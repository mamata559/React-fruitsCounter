// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  incrementMangoCount = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  incrementBananaCount = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{count1}</span> mangoes
            <span className="span-element">{count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoImage"
                className="fruit-image"
              />
              <button
                type="button"
                className="eat-fruit-button"
                onClick={this.incrementMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananaImage"
                className="fruit-image"
              />
              <button
                type="button"
                className="eat-fruit-button"
                onClick={this.incrementBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
