import React, { Component } from 'react';
import './App.css';
import Mapper from './components/Mapper';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="title">
          Mapper
        </div> */}
        <Mapper />
      </div>
    );
  }
}

export default App;
