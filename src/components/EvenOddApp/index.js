// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const display = count % 2 === 0 ? 'even' : 'odd'
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Count {count} </h1>
          <p className="heading1">Count is {display}</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickIncrement}
          >
            increment
          </button>
          <p className="para">*increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
