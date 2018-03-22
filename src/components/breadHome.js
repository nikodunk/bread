import React from 'react';


const Home = () => (
      <div>
          <div class="marginBottom flexBox">
                <div  id="slider" class="flexItem">
                    <div id="myCarousel" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="active item carousel-item" data-slide-number="0">
                                <img src={process.env.PUBLIC_URL + '/Shot1.jpg'} alt="" class="img-fluid" />
                            </div>
                            <div class="item carousel-item" data-slide-number="1">
                                <img src={process.env.PUBLIC_URL + '/Shot2.jpg'} alt="" class="img-fluid" />
                            </div>
                            <div class="item carousel-item" data-slide-number="2">
                                <img src={process.env.PUBLIC_URL + '/Shot3.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="3">
                                <img src={process.env.PUBLIC_URL + '/Shot4.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="4">
                                <img src={process.env.PUBLIC_URL + '/Shot5.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="5">
                                <img src={process.env.PUBLIC_URL + '/Shot6.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="6">
                                <img src={process.env.PUBLIC_URL + '/Shot7.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot8.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot9.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot10.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot11.jpg'} alt="" class="img-fluid"/>
                            </div>
                            <div class="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot12.jpg'} alt="" class="img-fluid"/>
                            </div>
                        </div>
                        
                        <ul class="carousel-indicators list-inline">
                            <li class="list-inline-item active">
                                <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot1.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot2.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot3.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-3" data-slide-to="3" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot4.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-4" data-slide-to="4" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot5.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-5" data-slide-to="5" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot6.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-6" data-slide-to="6" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot7.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-7" data-slide-to="7" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot8.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                        </ul>
                        <ul class="carousel-indicators list-inline">
                            <li class="list-inline-item">
                                <a id="carousel-selector-8" data-slide-to="8" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot9.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-9" data-slide-to="9" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot10.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-10" data-slide-to="10" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot11.jpg'} alt="" class="img-fluid"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a id="carousel-selector-11" data-slide-to="11" data-target="#myCarousel">
                                    <img src={process.env.PUBLIC_URL + '/Shot12.jpg'} alt="" class="img-fluid"/>
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


export default Home