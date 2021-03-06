import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import './assets/css/fonts.css';

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand">Hire Erik G!</span>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-5">

                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active ">
                    <Link to='/' class="nav-link">Home</Link>
                  </li>
                  <li class="nav-item active">
                    <Link to='/projects' class="nav-link">Projects</Link>
                  </li>
                  <li class="nav-item active">
                    <Link to='/resume' class="nav-link">Resume</Link>
                  </li>
                  <li class="nav-item active">
                    <Link to='/contact' class="nav-link">Contact</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      More
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="http://www.github.com/egrivalsky" target="_blank">Github</a></li>
                      <li><a class="dropdown-item" href="http://www.linkedin.com/in/erikgrivalsky" target="_blank">LinkedIn</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="https://www.instagram.com/ohmantrees/" target="_blank">Non-tech stuff</a></li>
                     </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
        </header>

        <div class="wrapper">
          <Route exact path='/' component={Home} /> 
          <Route path='/portfolio' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </div>


        <div class="spacer"></div>

        <footer>
          <div class="navbar navbar-expand-lg navbar-light bg-light" id="footer">
                <ul class="navbar-nav mr-auto" id="footer-list"> 
                  <li class="footer-li">erikgrivalsky@gmail.com</li>
                  <li class="footer-li"><Link to='/resume'>Resume</Link></li>
                  <li class="footer-li"><a href="https://linkedin.com/in/erikgrivalsky" target="_blank">LinkedIn</a></li>
                </ul>
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default App;
