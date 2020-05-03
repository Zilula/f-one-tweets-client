import React from 'react';
import WebSocket from 'isomorphic-ws'
import {map} from 'lodash'
import './stream.scss'
    
class Stream extends React.Component {
  state = {
   
  }

  ws = new WebSocket(this.props.stream.url)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const data = JSON.parse(evt.data) ||  ''

      console.log(data)
      // on receiving a message, add it to the list of messages
      this.setState({...data})
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
    const {img, url, name} = this.props.stream


    return (
        <div>
         <div className="stream">
             <img src={img} alt={name} className="head-shot"/>
              <div className="tweet-container">
                <img src={img} alt="Max" className="tweet-avatar"/>
                <p>{this.state.msg}</p>
              </div>
              </div>
      </div>
    )
  }
}

export default Stream