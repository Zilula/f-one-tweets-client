import React from 'react';
    
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
    return (
      <div className="stream">
      {this.state.data}
      </div>
    )
  }
}

export default Stream