import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import ArtistEntries from './components/ShowArtistEntry'
  class App extends React.Component {
    constructor(){
      super()
      this.state ={
          artistEntry:[]
      }
    }
    fetchArtists=()=>{
      fetch("http://localhost:8080/artists")
      .then((res)=> res.json())
      .then((artists)=>{
       this.setState({artistEntry: artists});
      });
    }
    componentDidMount(){
      this.fetchArtists();
    }

  render(){
    return (
      <Router>
        <nav>
        </nav>
        <div id="content_body">
          <Switch>
          <Route exact path="">
            <ArtistEntries />
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
