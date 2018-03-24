import React from 'react';
import InstagramEmbed from 'react-instagram-embed'

const About = () => (
  <div className="container">
      <h2>PREMIUM STREETWEAR, FIT FOR THE KING OF ENGLAND</h2>
      <br />
      <div className="marginBottom row">
        <div className="col-md-6">
                <h3>
                  DEN OF THIEVES
                </h3>
                <p class="copy">
                  Somewhere in Medieval times, possibly in Europe, a young street merchant and his merry band of chums win acclaim for hosting unspoken about parties next to nearby waterways. People from all walks of life come together. The music is good, the mood is jolly and traders even make some profit at these be-ins.<br/>
                  Until one day, the princess herself attends.<br/>
                  Time warps. Theories of life spin around and dance immaculately. Marble shifts in the palace, altering its entire appearance. The leaves rustle as trumpets and tambourines sound all over the kingdom.<br/>
                  Bold and fragile.<br/>
                  Determination and ease.<br />
                  The journey for peace continues.<br />
                </p>
                <h3>
                  ABOUT THE BRAND
                </h3>
                <p class="copy">
                  Maison Bread is a new Swiss fashion label focused on reinterpreting classic styles with cutting-edge design and avant-garde materials. Bread's passion so far has embraced Denim jeans, windbreakers and sweatshirts.
                </p>
                <h3>
                  ABOUT THE FOUNDER
                </h3>
                <p class="copy">
                  Every piece is handcrafted and designed from sketch to pattern, cut, sewn and finished in-house. The founder trained at renowned master-tailors "Knize & Comp." in Vienna, who's patrons included Austrian Noblement, Marlene Dietrich and the King of England.
                </p>
        </div>
        <div class="col-md-6">
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



export default About