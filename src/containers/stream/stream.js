import React from 'react';
import WebSocket from 'isomorphic-ws'
import {map} from 'lodash'
import './stream.scss'
    
class Stream extends React.Component {
  state = {
    max: {},
    general: {}
  }

  ws = new WebSocket(this.props.URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const data = JSON.parse(evt.data) ||  ''

      console.log(data)
      // on receiving a message, add it to the list of messages
      this.setState(state => {
        if(data.driver === 'max') {
          return { max:  data}
        }
        if(data.driver === 'max') {
          return { max:  data}
        }
        return state
      })
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      try {
      this.setState({
        ws: new WebSocket(URL),
      })

      } catch(e) {
         console.log(e)
      }
    }
  }


  render() {
    console.log(this.state)
    const {img} = this.props
    return (
<div>
       {map(this.state, d =>{
         return (<div className="stream">
             <img src={img} alt="Max" className="head-shot"/>
              <div className="tweet-container">
                <img src={img} alt="Max" className="tweet-avatar"/>
                <p>{d.msg}</p>
              </div>
          </div>)
         
       }
    )}
      </div>
    )
  }
}

export default Stream