import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.banana + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate
            <span className="span">{mangoesCount}</span> mangoes
            <span className="span">{bananasCount}</span> bananas
          </h1>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button
              type="button"
              className="eat-button"
              onClick={this.eatMango}
            >
              Eat Mango
            </button>
            <button
              type="button"
              className="eat-button"
              onClick={this.eatBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
