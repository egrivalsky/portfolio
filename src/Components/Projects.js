import React from 'react';



const Projects = () => {
    return (
        <div>
            <h1 class='container'>Projects.</h1>
            <main class="container" id="projects-container">
                <div class="card" style={{width: 18+'rem'}} id="project-card">
                    <div class="card-title">Jokebot8000</div>
                    <img src="https://res.cloudinary.com/dbljwcjis/image/upload/v1618946808/jokebot_ylc00p.png" className="card-img-top" alt="portrait of robot sculpture" />
                    <a href="https://jokebot8000.herokuapp.com" target="_blank" class="card-body">
                        <p class="card-text">A word association tool to help joke writers write jokes. Users can find current headlines and click to search for related words, then tweet jokes.
                        </p>
                        <sub class="tech-used">Python, Django, Javascript, Twitter API, NY Times API, Datamuse API</sub>
                    </a>
                    <h3 class='container'>
                        <a href="https://github.com/egrivalsky/jokebot_django" target="_blank">
                             See the Github Repo
                        </a>
                    </h3>
                </div>

                <div href="#"class="card" style={{width: 18+'rem'}} id="project-card">
                    <div class="card-title">The Platform</div>
                    <img src="https://res.cloudinary.com/dbljwcjis/image/upload/v1618946931/platform_gcwvgs.png" class="card-img-top" alt="screenshot of the platform app" />
                    <a href="https://the-platform-nyc.herokuapp.com" target="_blank" class="card-body">
                    <p class="card-text"> 
                        A social media platform based on the NYC subway system. Users register securely and can manage posts and comments, share photos, follow one another, and rate subway stations. 
                    </p>
                    <sub class="tech-used">
                        JavaScript, Express EJS, SQL, Postgres
                    </sub>
                    </a>
                    <h3 class='container'>
                        <a href="https://github.com/egrivalsky/subway-club-2" target="_blank">
                             See the Github Repo
                        </a>
                    </h3>
                </div>

                <div class="card" style={{width: 18+'rem'}} id="project-card">
                    <div class="card-title">BaristaMax</div>
                    <img src="https://res.cloudinary.com/dbljwcjis/image/upload/v1618946927/baristamax_py30ru.png" class="card-img-top" alt="screen shot of the baristamax game" />
                    <a href="https://www.erikgrivalsky.com/baristamax" target="_blank" class="card-body">
                    <p class="card-text">
                        A coffee shop simulation game. Player receives cafe orders and has to select ingredients in a given time. A browser-based, functionally programmed point-and-click game.
                    </p>
                    <sub class="tech-used">
                        HTML, CSS, JavaScript, DOM manipulation
                    </sub>
                    </a>
                    <h3 class='container'>
                        <a href="https://git.generalassemb.ly/ger1k/BaristaMax" target="_blank">
                             See the Github Repo
                        </a>
                    </h3>
                </div>
            </main>
        </div>
    );
}

export default Projects;
