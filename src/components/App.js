import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: []}

  onSearchSub = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params:{ query: term },


    });

    this.setState({ images: response.data.results });

  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "20px"}}>
        <SearchBar onSub={this.onSearchSub} />
        <ImageList  images={this.state.images} />
      </div>
    );
  }
}

export default App;
