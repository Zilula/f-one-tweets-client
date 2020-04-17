import React from 'react';
import Stream from './containers/stream'
import {map} from 'lodash'

import './App.css'

const data = [
  {
    name: "general",
    url: "ws://f-one-tweets-server.herokuapp.com/api/v1/f1/general"
  }
]
    
const App = () =>  {
    return (
      <div className="app"> 
    {map(data, d => <Stream URL={d.url}/>)}
      </div>
    )
}

export default App