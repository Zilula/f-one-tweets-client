import React from 'react';
import WebSocket from 'isomorphic-ws'
import {map, truncate, debounce} from 'lodash'
import car from '../../../merc-car.png'
import './stream.scss'
    
class Stream extends React.Component {
  state = {}
  ws = new WebSocket(this.props.stream.url)


  componentDidMount() {

    const {reorder} = this.props

    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const data = JSON.parse(evt.data) ||  ''
      // on receiving a message, add it to the list of messages
      this.setState({...data})

       debounce(() => {
       return reorder(data)
       }, 500, {maxWait: 500})
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
    const {headshot, name} = this.props.stream


    return (
         <div className="stream">
              <div className="tweet-container">
                <img src={headshot} alt={name} className="tweet-avatar"/>
                <p className="tweet-text">{this.props.stream.name}</p>
                <p className="tweet-text">{truncate(this.state.msg, {length: 100})}</p>
              </div>
              </div>
    )
  }
}

export default Stream