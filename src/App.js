import React from 'react';
    
const URL = 'ws://f-one-tweets-server.herokuapp.com/api/v1/f1/general'

class App extends React.Component {
  state = {
    data: ''
  }

  ws = new WebSocket(URL)

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
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }


  render() {
    return (
      <div>
      fuck {this.state.data}
      </div>
    )
  }
}

export default App