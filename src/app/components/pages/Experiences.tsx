import * as React from 'react'
import '../../../styles/components/experience.scss'
import '../../../styles/utility/utilities.scss'
import IndicativeLogoSVG from '../../../assets/indicative-logo.svg'

export {Experiences}

function Experiences() {
  return (
    <div className="c-experience">

      <div>
        <h1 className="c-experience--title">Experience</h1>
        <h3>Still a junior developer but hey, quality over quantity ;)</h3>
      </div>

      <div className="c-experience--item">
        <div className="c-experience--item__summary">
          <img src={IndicativeLogoSVG} alt="indicative-logo" height="150px"/>

          <div className="c-experience--item__summary--bullets">
            Fullstack engineer for company focused on data visualizations for product analytics. Work closely with software and marketing teams to develop customer facing features and fix bugs.

            <ul>
              <li>150+ frontend merge requests closed.</li>
              <li>30+ backend merge requests closed.</li>
              <li> 100+ bugfixes released to production.</li>
              <li>Completed projects involving over 50 custom React components.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {PROJECTS.map((project => {
          return (
            <Projects {...project}/>
          )
        }))}
      </div>

    </div>)
}

interface experienceProps {
  key: string
  img: any
  summary: string
  skills: string[]
}


function Projects(props: experienceProps) {
  return (
    <div>
      <div>{props.key}</div>
      <div>skills: {props.skills.map(skill => <span>{skill + ' '}</span>)}</div>
    </div>)
}

const PROJECTS: experienceProps[] = [
  { key: 'indicative', img: '', skills: ['css'], summary: 'hi there!' },
  { key: 'indicative', img: '', skills: ['css'], summary: 'hi there!' },
  { key: 'indicative', img: '', skills: ['css'], summary: 'hi there!' },
  { key: 'indicative', img: '', skills: ['css'], summary: 'hi there!' }
]