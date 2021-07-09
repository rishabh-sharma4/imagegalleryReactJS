import React from 'react';
import './App.css';
import Component1 from './components/Component1';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
      <h2>Image Gallery</h2>
      <Component1/>
      </div>
    )
  }
}

export default App;
