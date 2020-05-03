import React from 'react';
import Streams from './containers/streams'
import { map } from 'lodash'
import keys from './constants'

import './App.scss'

const data =
[  {
  id: 1,
    name: "general",
    url: `${keys.SERVER_URL}/api/v1/f1/general`,
    headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png'
  },  {
    id: 2,
    name: "max",
    url: `${keys.SERVER_URL}/api/v1/f1/max`,
    headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png'

  },
  {
    id: 3,
    name: "lewis",
    url: `${keys.SERVER_URL}/api/v1/f1/lewis`,
    headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png'

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