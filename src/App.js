import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link as RouterLink} from 'react-router-dom';
import ShowArtistEntries from './components/ShowArtistEntry';
import CreateArtistEntry from './components/CreateArtistEntry';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      artistEntry: []
    }
  }
  fetchArtists = () => {
    fetch("http://localhost:8080/artists")
    .then((res) => res.json())
    .then((artists) => {
      this.setState({artistEntry: artists});
    });
  }
  componentDidMount() {
    this.fetchArtists();
  }

  render() {
    return (
      <Router>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/create">Create Artist</RouterLink></li>
        </ul>
      </nav>
      <div id="content_body">
        <Switch>
          <Route path="/create">
            <CreateArtistEntry fetchEntries={this.fetchEntries}/>
          </Route>
          <Route exact path="/">
            <ShowArtistEntries artistEntry={this.state.artistEntry}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
