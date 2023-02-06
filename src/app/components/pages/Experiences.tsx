import * as React from 'react'

export {Experiences}

function Experiences() {
  return (
    <div>
      <h1>My Experiences</h1>
      {EXPERIENCES.map((experience => {
        return (
          <Experience {...experience}/>
        )
      }))}
    </div>)
}

interface experienceProps {
  key: string
  img: any
  summary: string
  skills: string[]
}


function Experience(props: experienceProps) {
  return (<div>


  </div>)
}

const EXPERIENCES: experienceProps[] = [
  {key: 'indicative', img: '', skills: ['css'], summary: 'hi there!'},
  {key: 'indicative', img: '', skills: ['css'], summary: 'hi there!'},
  {key: 'indicative', img: '', skills: ['css'], summary: 'hi there!'},
  {key: 'indicative', img: '', skills: ['css'], summary: 'hi there!'}
]