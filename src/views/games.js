import React from 'react'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>Games - AbApps</title>
        <meta property="og:title" content="Games - AbApps" />
      </Helmet>
      <div className="games-hero hero-container section-container">
        <div className="games-container1">
          <h1 className="games-text">
            <span>Among Us </span>
            <br></br>
          </h1>
          <a
            href="https://among-us-online-fan-remake.1tim.repl.co/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container2">
          <h1 className="games-text03">
            <span>Mario 64 </span>
            <br></br>
          </h1>
          <a
            href="https://28klotlucas2.github.io/Mario64webgl/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link1 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container3">
          <h1 className="games-text06">
            <span>Run 3 </span>
            <br></br>
          </h1>
          <a
            href="https://lekug.github.io/tn6pS9dCf37xAhkJv/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link2 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container4">
          <h1 className="games-text09">Crossy Road </h1>
          <a
            href="https://www-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s011h5fk/crossy-road.xml"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link3 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container5">
          <h1 className="games-text10">Minecraft </h1>
          <a
            href="https://precisionclient.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link4 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container6">
          <h1 className="games-text11">G.B.A. </h1>
          <a
            href="https://guzuv.github.io/guzEmu/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link5 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container7">
          <h1 className="games-text12">
            <span>Sword Battle.io </span>
            <br></br>
          </h1>
          <a
            href="https://sword-io-game.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link6 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
        <div className="games-container8">
          <h1 className="games-text15">
            <span>1v1.lol  </span>
            <br></br>
          </h1>
          <a
            href="https://1v1lol.56306.repl.co/"
            target="_blank"
            rel="noreferrer noopener"
            className="games-link7 button button-gradient"
          >
            CLICK HERE
          </a>
        </div>
      </div>
    </div>
  )
}

export default Games
