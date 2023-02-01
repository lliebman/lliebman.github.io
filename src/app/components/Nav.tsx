import * as React from 'react'

export {Nav}

function Nav() {
  return (
    <nav>
      {leftside()}
      {rightside()}
    </nav>)
}

function leftside() {
  return (
    <span>

    </span>
  )
}

function rightside() {
  return (
    <span>
      <a>
      {/*  linkedin*/}
      <img src={linkedin} alt="linkedin" height="40px" />
    </a>

      <a
        href="https://github.com/lliebman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" height="40px" />
      </a>

      {/*reume*/}

      <a
        href="mailto: lillian.liebman@gmail.com?subject="
        target="_blank"
        rel="noopener noreferrer"
      >
      {/*  email pic*/}
      </a></span>
  )
}