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
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item active">
                        <Link to='/' class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item active">
                        <Link to='/about' class="nav-link">About</Link>
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
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Github</a>
                                <a class="dropdown-item" href="#">Linkedin</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Non-tech Stuff</a>
                            </div>
                        </li>

                    </ul>
                </div>    
            </nav>
      </header>
      <body>

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />

      </body>
      </Router>


    </div>
  );
}

export default App;
