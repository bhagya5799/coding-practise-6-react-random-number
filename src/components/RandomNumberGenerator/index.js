// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => {
    const {count} = this.state
    console.log('hello')
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="Random-number-container">
          <h1>Random Number</h1>
          <p className="description">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button onClick={this.getRandomNumber}>Generate</button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
