import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const render = () => {
  // 加载完语言之后再展示root
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  )
}

render();