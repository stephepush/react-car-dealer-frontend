import React from 'react';
import './App.css';
//import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      carData: {}
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/model_infos`)
      .then(response => response.json())
      .then(data => {
        this.setState({carData: data})
        console.log(data)
      })
  }

  render(){
    return (
      <div>
        {this.state.carData.make}
      </div>
    )
  }
}

export default App;
