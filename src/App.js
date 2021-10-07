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
          <nav>
            <div class="container p-0 navBar">
              <div class="navbar-brand">
                <img src="./assets/images/portfolio-logo.png" alt="logo" width="40" height="40" />
              </div>
              <button class="navbar-toggler" id="toggleBtn" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" id="toggleIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </span>
              </button>
              <div class="collapse navbar-collapse p-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About Me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projectSection">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#skillSection">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#connectSection">Connect</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/'>
              <h1>About Me</h1>
            </Route>
            <Route path='/projects'>
              <h1>Projects</h1>
            </Route>
            <Route path='/skills'>
              <h1>Resume</h1>
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
