import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Music from './components/breadMusic'
import Advertisement from './components/breadAdvertisement'
import About from './components/breadAbout'
import Home from './components/breadHome'

class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <div class="marginBottom">
            <NavLink exact to={process.env.PUBLIC_URL + '/'}>
              <img src="breadlogo.jpg" alt="bread main logo" class="breadLogo" />
            </NavLink>
            <h1 class="bread">THE FAMOUS BREAD BRAND</h1>
        </div>

        <Navigation />
        <Main />

        <hr />
        <p><small>&copy;2018 Bread Denim Co.</small></p>
      </div>
    );
  }
}

export default App;



const Navigation = () => (
      <nav>
        <ul class="copy">
          <li><NavLink exact activeClassName="current" to={process.env.PUBLIC_URL + '/'}>What's Hot</NavLink></li>
          <li><NavLink exact activeClassName="current" to={process.env.PUBLIC_URL + '/about'}>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to={process.env.PUBLIC_URL + '/advertisement'}>Advertisement</NavLink></li>
          <li><NavLink exact activeClassName="current" to={process.env.PUBLIC_URL + '/music'}>Music</NavLink></li>
        </ul>
        <hr />
      </nav>
    );



const Main = () => (
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
        <Route exact path={process.env.PUBLIC_URL + '/about'} component={About}></Route>
        <Route exact path={process.env.PUBLIC_URL + '/advertisement'} component={Advertisement}></Route>
        <Route exact path={process.env.PUBLIC_URL + '/music'} component={Music}></Route>
        <Route component={Home}></Route>
      </Switch>
    );




