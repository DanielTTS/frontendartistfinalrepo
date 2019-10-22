import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link as RouterLink} from 'react-router-dom';
import ShowArtistEntries from './components/ShowArtistEntry';
import CreateArtistEntry from './components/CreateArtistEntry';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Home from "./components/Home"
import { LinkContainer } from 'react-router-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'

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
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div id="content_body">
        <Switch>
          <Route path="/create">
            <CreateArtistEntry fetchEntries={this.fetchEntries}/>
          </Route>
          <Route path="/artists">
            <ShowArtistEntries artistEntry={this.state.artistEntry}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
