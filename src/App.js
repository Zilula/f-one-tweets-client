import React from 'react';
import Stream from './containers/stream/stream'
import {map} from 'lodash'

import './App.scss'

const data = [
  {
    name: "general",
    url: "ws://localhost:7890/api/v1/f1/general",
    img:'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1584012927837.jpg'
  },
  {
    name: "general",
    url: "ws://localhost:7890/api/v1/f1/general",
    img:'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1584012927837.jpg'
  }
]
    
const App = () =>  {
    return (
      <div className="app"> 
        <div className="streams-container">
      {map(data, d => {
        return <>
        <Stream URL={d.url} img={d.img}/>
        </>
      })}
        </div>
      </div>
    )
}

export default App