import React from 'react';

const Resume = () => {
    return (
        <div>
            <h1 class='container'>Resume.</h1>
            <h2><a href="https://www.erikgrivalsky.com/portfolio/static/resume_grivalsky.pdf" target="_blank" download>Download resume here</a></h2>
            <main class='container' id='resume-container'>
                <iframe title="An Embedded Copy of my Resume" id="resume" src="https://docs.google.com/document/d/e/2PACX-1vQe6E-rtuZ104cWhlLZ1BtfmIuGj2YaeMShlJzZlbHI35H-1_8LDR6LuUMYK75yD_sQs-U8dvtTY7s2/pub?embedded=true" height="1240" width="900"></iframe>
            </main>
        </div>
    );
}

export default Resume;
