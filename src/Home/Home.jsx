import React, { useState } from 'react';
import "./home.css";

function Home() {
    return(
        <>
        <meta charSet="UTF-8" />
        <title>Translation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
        <div className="wrapper-images">
          <div className="images-line">
            <div
              className="line large"
              style={{
                backgroundImage:
                  "url(https://thumbs.dreamstime.com/b/language-translator-banner-hand-draw-doodle-backgrou-background-concept-translating-agency-interpreting-129576040.jpg?w=992)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZQg7MlFTg8h4vpnEnIxw_haO4WEnpg9Jr866edVzNg&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6Rw6ZyRzGz2e_xUBsb-xci4k7YZK3UU5JA&s)"
              }}
            ></div>
            <div
              className="line large"
              style={{ backgroundImage: "url(data:image/png" }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HsMLVyHAo99ruZNN1jMcN8ArzZuY5r7GbEoTsF6MPw&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtak4u7pUXrNdOO9aMmaZ9PSFvQXoO3TGyA&s)"
              }}
            ></div>
          </div>
          <div className="images-line">
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VhTEd5g_0hSMMLi3HXhLeYxwmql2gLO7-g&s)"
              }}
            ></div>
            <div
              className="line large"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89u-_rS-jOWOmUOVbjZqzdr5A9N2cOB9Mug&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAok5KRvVp7_SQiHD_waxGr2FB42J2Tjb1A&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXH21Ocr9oTLHdtK0NQE4exH0R8tgI2MDOpg&s)"
              }}
            ></div>
            <div
              className="line large"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PhJNKgvzQNHhd4targezM3zsXlSuT1hueA&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eHwvig4ZMXuQvdV77QzIzMKcRYrThT2jXw&s)"
              }}
            ></div>
          </div>
          <div className="images-line">
            <div
              className="line "
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnj60WglcjZaA8tCcj3UitQDDhbPyFo_D7Q&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZQg7MlFTg8h4vpnEnIxw_haO4WEnpg9Jr866edVzNg&s)"
              }}
            ></div>
            <div
              className="line large"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtak4u7pUXrNdOO9aMmaZ9PSFvQXoO3TGyA&s)"
              }}
            ></div>
            <div
              className="line "
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlN__SzHYSfvOjZI9IJ1rvQiVE9WTZ0gHyug&s)"
              }}
            ></div>
            <div
              className="line"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eHwvig4ZMXuQvdV77QzIzMKcRYrThT2jXw&s)"
              }}
            ></div>
            <div
              className="line large"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PhJNKgvzQNHhd4targezM3zsXlSuT1hueA&s)"
              }}
            ></div>
          </div>
        </div>
        <div className="container">
          <div className="logo">
            <h1>Multilingual Muse</h1>
          </div>
          <nav className="menu">
            <a href="/"> 🖹 Text to Text</a>
            <a href="http://localhost:3000/f2t"> 🖼️ Image to Text</a>
            <a href="speech/audio.html"> 🎧 Audio to Text</a>
          </nav>
        </div>
      </>
      
    )
}


export default Home;