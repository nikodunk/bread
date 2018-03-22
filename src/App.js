import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed'


class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <div class="marginBottom">
            <NavLink exact to='/'>
              <img src="breadlogo.jpg" class="breadLogo" />
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
          <li><NavLink exact activeClassName="current" to='/'>What's Hot</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/advertisement'>Advertisement</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/music'>Music</NavLink></li>
        </ul>
        <hr />
      </nav>
    );



const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/advertisement' component={Advertisement}></Route>
        <Route exact path='/music' component={Music}></Route>
      </Switch>
    );




const Home = () => (
      <div>
          <div class="marginBottom flexBox">
                <div  id="slider" class="flexItem">
                    <div id="myCarousel" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="active item carousel-item" data-slide-number="0">
                                <img src="Shot1.jpg" class="img-fluid" />
                            </div>
                            <div class="item carousel-item" data-slide-number="1">
                                <img src="Shot2.jpg" class="img-fluid" />
                            </div>
                            <div class="item carousel-item" data-slide-number="2">
                                <img src="Shot3.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="3">
                                <img src="Shot4.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="4">
                                <img src="Shot5.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="5">
                                <img src="Shot6.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="6">
                                <img src="Shot7.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src="Shot8.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src="Shot9.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src="Shot10.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src="Shot11.jpg" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src="Shot12.jpg" class="img-fluid"/>
                            </div>
                        </div>
                        
                        <ul class="carousel-indicators list-inline">
                            <li class="list-inline-item active">
                                <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel">
                                    <img src="Shot1.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                                    <img src="Shot2.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel">
                                    <img src="Shot3.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-3" data-slide-to="3" data-target="#myCarousel">
                                    <img src="Shot4.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-4" data-slide-to="4" data-target="#myCarousel">
                                    <img src="Shot5.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-5" data-slide-to="5" data-target="#myCarousel">
                                    <img src="Shot6.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-6" data-slide-to="6" data-target="#myCarousel">
                                    <img src="Shot7.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-7" data-slide-to="7" data-target="#myCarousel">
                                    <img src="Shot8.jpg" class="img-fluid"/>
                                </a>
                            </li>
                        </ul>
                        <ul class="carousel-indicators list-inline">
                            <li class="list-inline-item">
                                <a id="carousel-selector-8" data-slide-to="8" data-target="#myCarousel">
                                    <img src="Shot9.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-9" data-slide-to="9" data-target="#myCarousel">
                                    <img src="Shot10.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-10" data-slide-to="10" data-target="#myCarousel">
                                    <img src="Shot11.jpg" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-11" data-slide-to="11" data-target="#myCarousel">
                                    <img src="Shot12.jpg" class="img-fluid"/>
                                </a>
                            </li>
                        </ul>
                </div>
            </div>

            
            <div class="detailBox">
                98% cotton<br/>
                Produced in Holland<br/>
              
                
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick"/>
                      <input type="hidden" name="hosted_button_id" value="25GXZFY6RY7QU"/>
                      <table>
                      <tr><td><input type="hidden" name="on0" value="Style"/>Style
                      <select name="os0">
                        <option value="Hoodie">Hoodie 150,00 CHF</option>
                        <option value="V-Neck">V-Neck 140,00 CHF</option>
                        <option value="Crew Neck">Crew Neck 125,00 CHF</option>
                      </select> </td></tr>
                      <tr><td><input type="hidden" name="on1" value="Size"/>Size
                      <select name="os1">
                        <option value="S">S </option>
                        <option value="M">M </option>
                        <option value="L">L </option>
                        <option value="XL">XL </option>
                      </select> </td></tr>
                      <tr><td><input type="hidden" name="on2" value="Colors"/>Colors
                      <select name="os2">
                        <option value="Blue">Blue </option>
                        <option value="Green">Green </option>
                        <option value="Grey">Grey </option>
                        <option value="Custom Color">Custom Color </option>
                      </select> </td></tr>
                      <tr><td><input type="hidden" name="on3" value="or custom"/>or custom<input type="text" name="os3" maxlength="200"/></td></tr>
                      </table>
                      <input type="hidden" name="currency_code" value="CHF"/>
                      <input type="submit" class="btn" value="GET IT MADE NOW &rsaquo;" name="submit" border="0"/>
                      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                  </form> 
            </div>
        
      </div>  
      
    </div>


    );


    const About = () => (
      <div>
        <h1>About</h1>
        <br />
        <h2>PREMIUM STREETWEAR, FIT FOR THE KING OF ENGLAND</h2>
        <div class="marginBottom flexBox">
          <div class="flexItem">
              <h2>
                ABOUT THE BRAND
              </h2>
              <p class="copy">
                Maison Bread is a new Swiss fashion label focused on reinterpreting classic styles with cutting-edge design and avant-garde materials. Bread's passion so far has embraced Denim jeans, windbreakers and sweatshirts.
              </p>
              <h2>
                ABOUT THE FOUNDER
              </h2>
              <p class="copy">
                Every piece is handcrafted and designed from sketch to pattern, cut, sewn and finished by founder T. Dunk. T. trained at renowned master-tailors "Knize & Comp." in Vienna, who's patrons included Austrian Noblement, Marlene Dietrich and the King of England.
              </p>
              <h2>
                INSPIRATION
              </h2>
              <p class="copy">
                The 2018 collection is inspired by European street art, music and culture scenes. Years of experience and only the best materials ensure we deliver excellence. Enjoy!
              </p>
          </div>
          <div class="flexItem">
              <InstagramEmbed
                url='https://www.instagram.com/p/BdSUYQxlWU5/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
          </div>
        </div>
      </div>
    );


    const Advertisement = () => (
      <div className='advertisement'>
        <h1>Advertisement</h1>
        <p></p>
      </div>
    );

    const Music = () => (
      <div className='music'>
        <h1>Music</h1>
        <p></p>
      </div>
    );