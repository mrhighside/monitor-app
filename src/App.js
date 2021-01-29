
import React, {Component} from 'react';
import Servers from './components/servers';

class App extends Component {
  render () {
    return (
      <Servers servers={this.state.servers} />
    );
  }

  state = {
    servers: []
  };

  componentDidMount() {
    //Initial load
    fetch('http://localhost:8080/v1/all-status')
      .then(res => res.json())
      .then((data) => {
        this.setState({ servers: data })
      })
      .catch(console.log);
    //Check every 
    setInterval(async () => {
      fetch('http://localhost:8080/v1/all-status')
      .then(res => res.json())
      .then((data) => {
        this.setState({ servers: data })
      })
      .catch(console.log)
    }, 60000);
  }

  
}

export default App;
