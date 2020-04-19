import React from 'react';
import WebSocket from 'isomorphic-ws'
import './stream.scss'
    
class Stream extends React.Component {
  state = {
    data: ''
  }

  ws = new WebSocket(this.props.URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      console.log(evt.data)
      // on receiving a message, add it to the list of messages
      this.setState({data: evt.data})
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
    const {img} = this.props
    return (
      <div className="stream">
        <img src={img} alt="Max" className="head-shot"/>
        {/* <img src="https://cdn.freebiesupply.com/logos/large/2x/red-bull-racing-formula-one-team-logo-svg-vector.svg" className="team-logo" alt="Max"/> */}
        <div className="tweet-container">
       <p className="tweet-text">        <img src={img} alt="Max" className="tweet-avatar"/>
{this.state.data || 'I Am some Place Holder text while i wait to receive an actual tweet'} </p>
       </div>
      </div>
    )
  }
}

export default Stream