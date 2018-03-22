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
        <div className="center">
            <NavLink exact to='/'>
              <img src="breadlogo.jpg" alt="bread main logo" className="breadLogo" />
              <h1 className="bread">THE FAMOUS BREAD BRAND</h1>
            </NavLink>
            
        </div>
        <Navigation />
        <div className="mainWindow">
          <Main  />
        </div>
        <hr />
        <p className="center"><small>&copy;2018 Bread Denim Co.</small></p>
      </div>
    );
  }
}

export default App;



const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/' >Campaign</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/whatshot' >What's Hot</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/about' >About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/music' >Music</NavLink></li>
        </ul>
        <hr />
      </nav>
    );



const Main = () => (
      <Switch>
        <Route exact path='/' component={Advertisement}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/whatshot' component={Home}></Route>
        <Route exact path='/music' component={Music}></Route>
        <Route component={Advertisement}></Route>
      </Switch>
    );




