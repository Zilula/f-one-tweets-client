import React from 'react';
import Stream from './containers/stream/stream'
import { map } from 'lodash'
import keys from './constants'

import './App.scss'

const data =
  {
    name: "general",
    url: `${keys.SERVER_URL}/api/v1/f1/general`,
  }

    
const App = () =>  {
    return (
      <div className="app"> 
        <div className="streams-container">
        return <>
        <Stream URL={data.url} img={data.img}/>
        </>
        </div>
      </div>
    )
}

export default App