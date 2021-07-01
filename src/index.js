import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'

class App extends React.Component {

  render() {
    return (
      <div className="hello">Hello, World!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))