import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Projects from './Components/Projects'
import Skill from './Components/Skill'
import Footers from './Components/Footers'
import Forms from './Components/Forms'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Projects/>
      <Project1/>
      <Project2/>
      <Project3/>
      <Skill/>
      <Forms/>
      <Footers/>
    </div>
  )
}

export default App
