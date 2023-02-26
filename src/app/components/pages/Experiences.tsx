import * as React from 'react'
import '../../../styles/components/experience.scss'
import '../../../styles/components/project.scss'
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

            <div>
              <a href="https://app.indicative.com/?button_source=website&button_medium=indicative&button_campaign=homepage&button_term=explore_demo#/explore-demo">
              Check out Indicative's demo here!</a>
            </div>

            <ul>
              <li>150+ frontend merge requests closed.</li>
              <li>30+ backend merge requests closed.</li>
              <li> 100+ bugfixes released to production.</li>
              <li>Completed projects involving over 50 custom React components.</li>
            </ul>
          </div>
        </div>

        <div className="c-experience--item__projects">
          {PROJECTS.map((project => {
            return (
              <Projects {...project}/>
            )
          }))}
        </div>
      </div>
    </div>)
}

interface experienceProps {
  key: string
  img: any
  title: string
  summary: string
  skills: string[]
}


function Projects(props: experienceProps) {
  return (
    <div className="c-project">
      <h3>{props.title}</h3>
      <div className="u-font-size-medium">{props.summary}</div>
      <div className="u-font-light">skills: {props.skills.map(skill => <span>{skill + ', '}</span>)}</div>
    </div>)
}

const PROJECTS: experienceProps[] = [
  { key: 'billing', img: '', title: 'Growth Billing Feature', skills: ['React', 'Typescript', 'Java', 'Stripe API'], summary: 'Spearheaded full-stack effort to create new self-serve upgrade plans utilizing Stripe. Maintained project, updated checkout plans and user checkout experience.' },
  { key: 'cypress', img: '', title: 'Testing Framework Implementation', skills: ['Cypress', 'Typescript', 'React'], summary: 'Introduced Cypress end-to-end testing to the frontend stack as the primary testing tool. Established configurations and best practices document.' },
  { key: 'conversionLimits', img: '', title: 'Conversion Limits Feature', skills: ['React', 'Typescript'], summary: 'Developed frontend portion of a new time based filter to allow users to fine tune funnel charts for more nuanced and effective results.' },
  { key: 'qualityChampions', img: '', title: 'Quality Champions Group', skills: ['Leadership', 'Critical Thinking'], summary: 'Chosen to lead the team in a company wide code quality program. Developed criteria and led effort in encouraging teammates to improve on the quality of their work and supporting the coverage of their teammates\' work.' },
  { key: 'reactification', img: '', title: 'Reactification', skills: ['React', 'AngularJS', 'Typescript'], summary: 'Ported dozens of components from AngularJS to React as part of an app wide migration to reduce friction between competing frontend frameworks.' },
]