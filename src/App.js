import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './index.css'

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
              <h1>About Me</h1>
            </Route>
            <Route path='/projects'>
              <h1>Projects</h1>
            </Route>
            <Route path='/skills'>
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
