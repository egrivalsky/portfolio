import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

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
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    </div>
    </nav>

    </header>

      <body>
            <Route path='/portfolio' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />

      </body>
      </Router>
<footer>
  <div class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container-fluid">
      <ul class="navbar-brand" id="footer-list">
        <li>Hire Erik G!</li>
        <li>Hire Erik G!</li>
        <li>Hire Erik G!</li>
      </ul>
    </div>

  </div>
</footer>
    </div>
  );
}

export default App;
