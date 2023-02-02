import * as React from 'react'
import GithubSVG from '../../assets/github.svg'
import EMailSVG from '../../assets/email.svg'
import LinkedinSVG from '../../assets/linkedin.svg'
import '../../styles/components/nav.scss'

export {Nav}

function Nav() {
  return (
    <nav className="c-nav">
      {leftside()}
      {rightside()}
    </nav>)
}

function leftside() {
  return (
    <span className="c-nav--left">
      Lillian Liebman
    </span>
  )
}

function rightside() {
  return (
    <span className="c-nav--right">
      <a className="c-navItem">
      {/*  <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>*/}
      <img src={LinkedinSVG} alt="linkedin" height="50px" />
    </a>

      <a className="c-navItem"
        href="https://github.com/lliebman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubSVG} alt="github" height="50px" />
      </a>

      {/*resume*/}

      <a className="c-navItem"
        href="mailto: lillian.liebman@gmail.com?subject=Hey there!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={EMailSVG} alt="email" height="50px" />
      </a></span>
  )
}