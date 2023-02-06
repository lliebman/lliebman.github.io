import * as React from 'react'
import '../../../styles/components/intro.scss'

export {Intro}

function Intro() {
  return (
    <div>
      <div className="c-intro--background"/>
      <div className="c-intro">
        <h1 className="c-intro--title">Hi, I'm Lillian Liebman</h1>
        <h2 className="">Software Developer with a soft spot for all things React</h2>
        <h3 className="">Welcome to my website!</h3>
      </div>
    </div>)
}