import React from 'react';
import Cardlist from './Cardlist.js';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      giphyGif:[]
    }
    this.getGifSearch = this.getGifSearch.bind(this);
  }

  getGifSearch(event){
    let apiKey = 'v22O82I3CMnbDxI5rFPTOI0UciBh9iYA';
    let search = event.target.value;

    fetch('http://api.giphy.com/v1/gifs/search?q='+search+'&api_key='+ apiKey)
    .then(response => response.json())
    .then(data => {
      this.setState({giphyGif:data.data})
    })
    //console.log(this.state.giphyGif);
  }


  render(){
    let gifObject;

    if((this.state.giphyGif != null)){
      gifObject = (
        <Cardlist array= {this.state.giphyGif}/>
      );

    } else {
      gifObject = 
      <div className='tc'> 
      <h2>Please enter a valid keyword.</h2>
      </div>
    }

    return (
      <div className= 'bg-light-green'>
        <div className='tc'>
          <h1>Gif Generator</h1>
          <label>Enter gif search: </label>
          <input className='mt3' type='search' onChange={this.getGifSearch}/>
        </div>
          {gifObject}
      </div>
    );
  }
}
export default App;
