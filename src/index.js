import React from 'react'
import ReactDOM from 'react-dom'
import Name from './Name'
import Publish from './Publish'
import Story from './Story'
import Title from './Title'

ReactDOM.render(
  <div>
    <Title />
    <Name />
    <Story />
    <Publish />
  </div>,
  document.getElementById('root')
)
