import React from 'react'
import PropTypes from 'prop-types'
//site pics
//import pic01 from '../images/pic01.jpg'
//import pic02 from '../images/Givehome.png'
import pic03 from '../images/Giveshop.png'
import welltreadhome from '../images/welltreadhome.png'
import welltreadsearch from '../images/welltreadsearch.png'
import trailmap from '../images/trailmap.png'
import profile from '../images/headshot.jpg'

//logos
import gatsby from '../images/gatsby-icon.png'
import js from '../images/JS-logo.png'
import react from '../images/react.png'
import node from '../images/nodejs.png'
import css from '../images/css3.png'
import materialui from '../images/matui.png'
import postresql from '../images/postgresql.png'
import git from '../images/Git.png'
import github from '../images/github.svg'
import html from '../images/html5.png'
import express from '../images/express.png'
import sass from '../images/sass.png'
import redux from '../images/redux.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Skills</h1>

          <div className="skillCardTitle">
            <h2>JavaScript</h2>
          </div>
          <div className="skillCard">
            <div>
              <img src={gatsby} alt="gatsby-logo" className="logos" />
              <p id="pTag">Gatsby</p>
            </div>
            <div>
              <img src={js} alt="js-logo" className="logos" />
              <p id="pTag">Javascript</p>
            </div>
            <div>
              <img src={react} alt="react-logo" className="logos" />
              <p id="pTag">React</p>
            </div>
            <div>
              <img src={redux} alt="redux-logo" className="logos" />
              <p id="pTag">Redux</p>
            </div>
            <div>
              <img src={node} alt="node-logo" className="logos" />
              <p id="pTag">Node</p>
            </div>
            <div>
              <img src={express} alt="express-logo" className="logos" />
              <p id="pTag">Express</p>
            </div>
          </div>
          <div className="skillCardTitle">
            <h2>HTML & CSS</h2>
          </div>
          <div className="skillCard">
            <div>
              <img src={html} alt="html-logo" className="logos" />
              <p id="pTag">HTML5</p>
            </div>
            <div>
              <img src={react} alt="react-logo" className="logos" />
              <p id="pTag">JSX</p>
            </div>
            <div>
              <img src={css} alt="css-logo" className="logos" />
              <p id="pTag">CSS3</p>
            </div>
            <div>
              <img src={sass} alt="sass-logo" className="logos" />
              <p id="pTag">SASS</p>
            </div>
            <div>
              <img src={materialui} alt="materialui-logo" className="logos" />
              <p id="pTag">Material-UI</p>
            </div>
          </div>
          <div className="skillCardTitle">
            <h2>Other</h2>
          </div>
          <div className="skillCard">
            <div>
              <img src={postresql} alt="postgresql-logo" className="logos" />
              <p id="pTag">PostreSQL</p>
            </div>
            <div>
              <img src={git} alt="git-logo" className="logos" />
              <p id="pTag">Git</p>
            </div>
            <div className="skillCardItems">
              <img src={github} alt="github-logo" className="logos" />
              <p id="pTag">GitHub</p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Projects</h1>
          <h3 id="pTag" className="subTitle">
            {' '}
            E-Commerce Web Application
          </h3>
          <div className="imgContainer">
            <img className="images" src={pic03} alt="" />
          </div>

          <p id="pTag">
            <h3>
              <div className="links">
                <a href="http://www.GiveHats.live" id="link">
                  www.GiveHats.live
                </a>

                <a href="https://github.com/KevinRay13/give" id="link">
                  GitHub Repository
                </a>
              </div>
            </h3>
            <b>Technologies Implemented:</b> <br />
            React | Redux | Express | Node | PostgreSQL | SASS <br />
            <div className="alignLeft">
              <b> Accomplishments:</b>
              <br /> - Implemented Redux to handle user persistence and shopping
              cart
              <br /> - Prioritized responsive design with SASS and Flexbox
              <br /> - Conditionally rendered admin view utilizing Express
              Sessions
              <br /> - Learned PostgreSQL, created databases for users and
              merchandise
              <br /> - Full CRUD web application
            </div>
          </p>
          <h3 className="subTitle" id="pTag2">
            Mobile Responsive Web Application
          </h3>
          <div className="imgContainer">
            <img className="imagesTread" src={welltreadhome} alt="" />
            <img className="imagesTread" src={welltreadsearch} alt="" />
            <img className="imagesTread" src={trailmap} alt="" />
          </div>

          <p id="pTag">
            <h3>
              <div className="links">
                <a href="https://welltread.co" id="link">
                  www.WellTread.co
                </a>

                <a href="https://github.com/well-tread/well-tread" id="link">
                  GitHub Repository
                </a>
              </div>
            </h3>
            <b>Technologies Implemented:</b> <br />
            React | Redux | Node | Material UI | TypeScript | GitHub | Git{' '}
            <br />
            <div className="alignLeft">
              <b> Accomplishments:</b>
              <br /> - Built out backend server to fetch trails & weather from
              multiple API's
              <br /> - Implemented geolocation to find top five trails and three
              day weather forecast
              <br /> - Succesfully worked with a team by utilizing GitHub and
              Agile methods
              <br /> - Utilized TypeScript for readability of data
            </div>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <div className="imgContainer" style={{ marginBottom: '3em' }}>
            <img
              className="profile"
              src={profile}
              alt="pic of me"
              style={{ height: '15em', border: '2px solid white' }}
            />
          </div>
          <h3>
            {' '}
            I am a Full-Stack Web Developer creating business solutions.{' '}
          </h3>
          <p>
            I draw inspiration from current design trends and the world around
            me. Using that inspiritaion I create sleek user interfaces and an
            elegant layout for better user experience.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <ul className="icons">
            <li id="li">
              <a
                href="mailto:kevinraye13@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kevin-edmondson/"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KevinRay13"
                className="icon fa-github"
                id="ic"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
