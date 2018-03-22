import React from 'react';
import InstagramEmbed from 'react-instagram-embed'

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



export default About