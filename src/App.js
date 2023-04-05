import './App.css';
import profilePic from './images/profilePic.jpg';
import githubLogo from './images/github-mark.png'
import { useState } from 'react';

function App() {
  const [navbar, setNavbar] = useState('');

  const toggleBar = () => {
    setNavbar(navbar === '' ? 'mobile' : '');
}

  
  return (
    <>
      {/* <!-- ==================Side Navbar================== --> */}
      <div id="nav-div">
        <header id="header">LOKENDRA GUPTA</header>
        <img src={profilePic} alt="profilePic" id="profilePic" />
        <nav className={`navbar ${navbar}`}>
          <ul className="navbar-list">
            <li><a id="aboutLink" href="#about" className="navbar-links">ABOUT</a></li>
            <li><a id="educationLink" href="#education-sec" className="navbar-links">EDUCATION</a></li>
            <li><a id="projectsLink" href="#projects-sec" className="navbar-links">PROJECTS</a></li>
            <li><a id="skillsLink" href="#skills-sec" className="navbar-links">SKILLS</a></li>
          </ul>
        </nav>
        <button className="mobile-navbar-btn" onClick={toggleBar}> 
          <i name="open" className="fa-solid fa-bars mobile-nav-icon"></i>
        </button>
      </div>

      {/* <!-- ==================Parent div of all the sections================== --> */}

      <div id="main-div">

        {/* <!-- ==================About section================== --> */}


        <section id="about">
          <h1 id="name">LOKENDRA GUPTA</h1>
          <h4 id="address">JHANSI, UTTAR PRADESH <a href="mailto:guptalokendra18@gmail.com"
            id="email">GUPTALOKENDRA18@GMAIL.COM</a></h4>
          <p id="aboutPara">Hi, I'm Lokendra. I completed my Bachelor's in PCM(Physics, Chemistry, Mathematics) from
            the Bundelkhand University, Jhansi, Uttar Pradesh and then I completed my Master's in Mathematics from
            the same University i.e Bundelkhand University. I was always interested in Computer Science, but due to
            some reasons I could not pursue my Bachelor's degree in Computer Science. Later I heard about Full Stack
            Development course and then I did this course from Ekeeda pvt ltd. I'm interested in opportunities where
            I can use my problem solving skills in critical situations in the field of Computer Science. My ultimate
            goal is to contribute to innovations of positive change. The work is ongoing education for me, so I'm
            always open to meet new people, their suggestions and exciting opportunities. My current goal is to
            improve my coding skills even more because there is no upper bound.

            When I'm not working, you will find me in the gym or watching movies mostly in action genre. I like to
            travel, in my opinion travelling gives you new ideas & new perspective to everything. You get to know a
            lot about the different cultures, their history, the language and all the unique things every place has
            to offer.</p>
          <a href="https://drive.google.com/file/d/1bcXornY_0BIwFeTK0E7gLapGV1mZqcjp/view?usp=share_link"
            id="resume-link" target="_blank" rel="noreferrer">View my Resume</a>
        </section>
        <hr />

        {/* <!-- ==================Education section================== --> */}

        <section id="education-sec">
          <h2 className="heading">EDUCATION</h2>
          <div>
            <h3 className="university-name">EKEEDA PVT LTD<span className="ekeeda-date">December 2022 - December 2023</span>
            </h3>
            <h3 className="city">MUMBAI, MAHARSHTRA</h3>
            <h3 className="course-name">FULL STACK DEVELOPMENT</h3>
            <p className="course-info">HTML5, CSS3, JavaScript, JAVA, ReactJS, GitHub</p>
            <p className="ekeeda-dates">December 2022 - December 2023</p>
          </div>
          <div>
            <h3 className="university-name">BUNDELKHAND UNIVERESITY<span className="msc-date">November 2020 - August
              2022</span></h3>
            <h3 className="city">JHANSI, UTTAR PRADESH</h3>
            <h3 className="course-name">MASTER OF SCIENCE</h3>
            <p className="course-info">Mathematics</p>
            <p className="msc-dates">November 2020 - August 2022</p>
          </div>
          <div>
            <h3 className="university-name">BUNDELKHAND UNIVERESITY<span className="bsc-date">July 2016 - Septmber
              2020</span></h3>
            <h3 className="city">JHANSI, UTTAR PRADESH</h3>
            <h3 className="course-name">BACHELOR OF SCIENCE</h3>
            <p className="course-info">Mathematics, Physics, Chemistry</p>
            <p className="bsc-dates">July 2016 - Septmber 2020</p>
          </div>
        </section>
        <hr />

        {/* <!-- ==================Projects section================== --> */}


        <section id="projects-sec">
          <h2 className="heading">MINI PROJECTS</h2>
          <h2 className="project-link">CALCULATOR</h2>
          <p className="used-elements">HTML5, CSS3, JavaScript</p>
          <p className="project-details">A calculator which have all the basic functions as "addition", "subtraction",
            "multiplication" & "division"</p>
          <a href="https://github.com/ASRKian/Ekeeda_Project_Calculator.git" target="_blank" className="git-link" rel="noreferrer"><img
            src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">BMI CALCULATOR</h2>
          <p className="used-elements">HTML5, CSS3, JavaScript</p>
          <p className="project-details">A calculator which shows us our body mass by a simple calculation using our
            "height" in cms & "weight" in kgs.</p>
          <a href="https://github.com/ASRKian/Ekeeda_Project_BMI_Calculator.git" target="_blank" className="git-link" rel="noreferrer"><img
            src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">RESUME</h2>
          <p className="used-elements">HTML5, CSS3</p>
          <p className="project-details">Another mini project using HTML & CSS. The main aim to made this mini project is
            to know more about the properties of CSS.</p>
          <a href="https://github.com/ASRKian/Ekeeda_Project_Resume.git" target="_blank" className="git-link" rel="noreferrer"><img
            src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">TIC-TAC-TOE</h2>
          <p className="used-elements">ReactJS</p>
          <p className="project-details">A quick paper & pencil game in real life on the web using concepts of ReactJS</p>
          <a href="https://github.com/ASRKian/tic-tac-toe.git" target="_blank" className="git-link" rel="noreferrer"><img
            src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">BASIC WEBSITES</h2>
          <p className="used-elements">ReactJS</p>
          <p className="project-details">Some websites one of which modify text using ReactJS & another which shows news
            by API using ReactJS </p>
          <a href="#" target="_blank" className="git-link"><img src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">INSTAGRAM HOME PAGE CLONE</h2>
          <p className="used-elements">HTML5, CSS3</p>
          <p className="project-details">Made a Instagram front page for the better practice of HTML5 & CSS3</p>
          <a href="https://github.com/ASRKian/Ekeeda_Project_Instagram_clone.git" target="_blank"
            className="git-link" rel="noreferrer"><img src={githubLogo} className="git-img" alt="" /></a>

          <h2 className="project-link">THIS PORTFOLIO</h2>
          <p className="used-elements">HTML5, CSS3, JavaScript</p>
          <a href="https://github.com/ASRKian/Ekeeda_Project_Portfolio.git" target="_blank" className="git-link" rel="noreferrer"><img
            src={githubLogo} className="git-img" alt="" /></a>
        </section>
        <hr />

        {/* <!-- ==================Skills section================== --> */}

        <section id="skills-sec">
          <h2 className="heading">SKILLS</h2>
          <h4 className="skill-heading">PROGRAMMING LANGUAGE</h4>
          <p className="skills">Java</p>
          <h4 className="skill-heading">WEB TECHNOLOGIES & TOOLS</h4>
          <p className="skills">HTML, CSS, JavaScript, ReactJS, Bootstrap</p>
          <h4 className="skill-heading">OTHER TECHNOLOGIES</h4>
          <p className="skills">Git version control, GitHub</p>
          <h4 className="skill-heading">MATHEMATICS</h4>
          <p className="skills">Operations Research & Advanced Operations Research, Graph Theory, Numerical Analysis,
            Discrete Mathematics</p>
        </section>
        <hr />
      </div>
    </>
  );
}

export default App;
