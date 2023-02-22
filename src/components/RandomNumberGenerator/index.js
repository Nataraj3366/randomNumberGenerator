import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  getGeneratedNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.getGeneratedNumber}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
