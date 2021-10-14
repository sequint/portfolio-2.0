import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'

// Navbar
// I love to fail! (About Me)
// Coding Philosophy - comment first
// How I solve prob
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
              <h1>Projects</h1>
            </Route>
            <Route path='/toolbelt'>
              <h1>Skills</h1>
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
