// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>0</span> mangoes <span>0</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoImage"
                className="fruit-image"
              />
              <button type="button" className="eat-fruit-button">
                Eat Mango
              </button>
            </div>
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananaImage"
                className="fruit-image"
              />
              <button type="button" className="eat-fruit-button">
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
