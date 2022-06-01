import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    apiResult: '',
    dogName: '',
    listNameDogs: [],
    listImageDogs: [],
  }

  componentDidMount() {
    this.getFetch();
  }

getFetch = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  this.setState({ apiResult: data.message });
}

// getDogName = ({ target }) => {
//   this.setState({
//     dogName: target.value,
//   });
// }

saveDogName = () => {
  const { dogName, listImageDogs, listNameDogs} = this.state;
  this.setState((prevState) => ({
    listNameDogs: [...prevState.listNameDogs, dogName],
    dogName: '',
  }));
  localStorage.setItem('dogName', JSON.stringify(listNameDogs));
  localStorage.setItem('dogImageUrl', JSON.stringify(listImageDogs));
}

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.apiResult.includes('terrier')) {
      console.log('tem terrier');
      return false;
    }
    console.log('não tem terrier');
    return true;
  }

  showNextDogImage = () => {
    this.getFetch();
    const { apiResult } = this.state;
    this.setState ((prevState) => ({
      listImageDogs: [...prevState.listImageDogs, apiResult],
    }))
    alert(apiResult.split('/')[4]);
  }

  render() {
    const loadingElement = <p>Loading...</p>;
    const { apiResult, dogName } = this.state;
    return (
      <div>
        {apiResult.length === 0 ? loadingElement : <img
          src={ apiResult }
          alt="dog"
          width={ 300 }
          height={ 300 }
        />}
        <button type="button" onClick={ this.showNextDogImage }>Next Dog</button>
        <input
          value={ dogName }
          type="text"
          onChange={ (e) => this.setState({ dogName: e.target.value }) }
        />
        <p>{`Dog Name: ${dogName}`}</p>
        <button type="button" onClick={ (this.saveDogName) }>Save Dogs Name</button>
      </div>
    );
  }
}

export default App;
