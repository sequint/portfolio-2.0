import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav></nav>
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
            <Route path='/contact'>
              <h1>Contact Page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
