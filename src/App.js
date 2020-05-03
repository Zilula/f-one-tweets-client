import React from 'react';
import Streams from './containers/streams'
import { map } from 'lodash'
import keys from './constants'

import './App.scss'

const data =
[  {
    name: "general",
    url: `${keys.SERVER_URL}/api/v1/f1/general`,
  },  {
    name: "max",
    url: `${keys.SERVER_URL}/api/v1/f1/max`,
  }
]

    
const App = () =>  {
    return (
      <div className="app"> 
        <div className="streams-container">
        <Streams data={data}/>
        </div>
      </div>
    )
}

export default App