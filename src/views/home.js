import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AbApps</title>
        <meta property="og:title" content="AbApps" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
          </div>
          <div className="home-links">
            <span className="home-text navbarLink">How it works</span>
            <span className="home-text01 navbarLink">Features</span>
            <span className="home-text02 navbarLink">Blog</span>
            <button className="button-secondary button">THANKS</button>
            <button className="button button-primary">SUBSCRIBE</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <h1 className="home-title">
              <span>Unlock the next generation Gaming </span>
              <span className="home-text04">experience</span>
            </h1>
            <div className="home-container1">
              <Link to="/games" className="home-navlink button button-gradient">
                PLAY GAMES
              </Link>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/de-700h.jpg"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/union-400h.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3"></div>
          <img
            alt="image"
            src="/playground_assets/sdfghjasdfghgfdxsdfghgfdfghgfdfghfdfghgfdfgfdfgfdsfg-1200w.jpeg"
            className="home-hero-image1"
          />
          <div className="home-content1">
            <span className="home-text05 beforeHeading">how it works</span>
            <h1 className="home-text06">
              <span>Play as long as you</span>
              <br></br>
              <span>want!</span>
              <br></br>
            </h1>
            <div className="home-container2">
              <Link
                to="/shout-out"
                className="home-navlink1 button-secondary button bg-transparent"
              >
                Shout out
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text11 beforeHeading">save money</span>
            <h1 className="home-text12">
              <span>be the gamer</span>
              <br></br>
              <span className="home-text15">from this website</span>
              <br></br>
            </h1>
            <div className="home-container3">
              <button className="button-secondary button bg-transparent">
                Soon
              </button>
            </div>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/wqfhihcgashuvs%20dcvugisfuvvufvbhvbyuhu8ft-1200w.jpeg"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text17 beforeHeading">get started</span>
            <h1 className="home-text18">
              <span>Open your mind</span>
              <br></br>
              <span>to gaming</span>
              <br></br>
            </h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text23">1</span>
              </div>
              <div className="home-container4">
                <span className="home-title1">Enter</span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text24">2</span>
              </div>
              <div className="home-container5">
                <span className="home-title2">Get ready</span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text25">3</span>
              </div>
              <div className="home-container6">
                <span className="home-title3">Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width5 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text26 beforeHeading">faq</span>
              <h1 className="home-text27">
                <span className="home-text28">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text30">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text31">Is this a Free?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text32">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text33">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text34">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text35">
                    Is this a globally available?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text36">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text37">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text38">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image6"
            />
          </div>
          <div className="home-banner">
            <span className="home-text39 beforeHeading">get started</span>
            <h1 className="home-text40">Gaming for the next gen</h1>
            <span className="home-text41">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="home-btns">
              <Link
                to="/games"
                className="home-navlink2 button button-gradient"
              >
                PLAY GAMES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
