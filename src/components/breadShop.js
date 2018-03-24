import React from 'react';


const Shop = () => (
      <div className="container" >
          <div className="marginBottom row">
                <div id="slider" className="col-md-6">
                    <div id="myCarousel" className="carouselBox carousel slide">
                        <div className="carousel-inner">
                            <div className="active item carousel-item" data-slide-number="0">
                                <img src={process.env.PUBLIC_URL + '/Shot9.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="1">
                                <img src={process.env.PUBLIC_URL + '/Shot10.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="2">
                                <img src={process.env.PUBLIC_URL + '/Shot11.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="3">
                                <img src={process.env.PUBLIC_URL + '/Shot12.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="4">
                                <img src={process.env.PUBLIC_URL + '/Shot13.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="5">
                                <img src={process.env.PUBLIC_URL + '/Shot14.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="6">
                                <img src={process.env.PUBLIC_URL + '/Shot15.jpg'} alt="" className="img-fluid"/>
                            </div>
                            <div className="item carousel-item" data-slide-number="7">
                                <img src={process.env.PUBLIC_URL + '/Shot16.jpg'} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div style={{margin: 'auto', paddingLeft: 40}}>
                            <ul className="carousel-indicators list-inline">
                                <li className="list-inline-item">
                                    <a id="carousel-selector-0" data-slide-to="0" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot9.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot10.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot11.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-3" data-slide-to="3" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot12.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                            </ul>
                            <ul className="carousel-indicators list-inline">
                                <li className="list-inline-item">
                                    <a id="carousel-selector-4" data-slide-to="4" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot13.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-5" data-slide-to="5" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot14.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-6" data-slide-to="6" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot15.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-7" data-slide-to="7" data-target="#myCarousel">
                                        <img src={process.env.PUBLIC_URL + '/Shot16.jpg'} alt="" className="img-fluid"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>

            
            <div className="col-md-6">
                <div className="detailBox">
                    <p>
                      MADE TO ORDER<br/>
                      98% cotton<br/>
                      Produced in Holland<br/>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                          <input type="hidden" name="cmd" value="_s-xclick"/>
                          <input type="hidden" name="hosted_button_id" value="25GXZFY6RY7QU"/>
                          <table>
                          <tr><td><input type="hidden" name="on0" value="Style"/>Style
                          <select name="os0">
                            <option value="Hoodie">Hoodie €150,00 EUR</option>
                            <option value="Crew Neck">Crew Neck €100,00 EUR</option>
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
                            <option value="Citrus Green">Citrus Green </option>
                            <option value="Sky Blue">Sky Blue</option>
                            <option value="Winter Grey">Winter Grey </option>
                            <option value="...or custom color below">...or custom color below </option>
                          </select> </td></tr>
                          <tr><td><input type="hidden" name="on3" value="or custom"/>or custom<input type="text" name="os3" maxlength="200"/></td></tr>
                          </table>
                          <input type="hidden" name="currency_code" value="EUR" />
                          <input type="submit" className="btn" value="GET IT MADE NOW &rsaquo;" name="submit" border="0"/>
                          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                      </form> 
                    </p>
                </div>
            </div>  
        </div>
    </div>


    );


export default Shop