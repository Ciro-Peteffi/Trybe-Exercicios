import './App.css';
import React from 'react';

export default class App extends React.Component {

  
  state = {
    api: '',
  }

  async componentDidMount() {
    await this.getUserFromAPI();
  }

  getUserFromAPI = async () => {
    const fetchUrl = 'https://api.randomuser.me/';
    const resultFetchApi = await fetch(fetchUrl);
    const resultJSON = await resultFetchApi.json();
    console.log(resultJSON.results)
    this.setState({api: resultJSON.results})
  }

  
  render() {
    const { api } = this.state;
    const loading = 'loading...'
    return (
      <div>
     
     <h1>{api[1].dob.age}</h1> 
      </div>

    
      
    );

  }
}


