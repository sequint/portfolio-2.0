import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/toolbelt'>
              <Skills />
            </Route>
            <Route path='/resume'>
              <h1>Resume</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
