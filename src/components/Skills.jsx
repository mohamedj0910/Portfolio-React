import html from '../assets/images/skills-icons/html5.png';
import css from '../assets/images/skills-icons/css3.png';
import js from '../assets/images/skills-icons/javascript.png';
import ps from '../assets/images/skills-icons/photoshop.png';
import bootstrap from '../assets/images/skills-icons/bootstrap.png';
import react from '../assets/images/skills-icons/react.png'
import git from '../assets/images/skills-icons/git.png';
import mysql from '../assets/images/skills-icons/mysql.png';
import python from '../assets/images/skills-icons/python.png';

function TechicalSkills({ name, img }) {
  return (
    <div className="logo-img">
      <img src={img} alt={name} />
    </div>
  );
}

function SkillCard({ icon, name, level, stars, image }) {
  return (
    <div className="card">
      <div className="card-header">
        {image && <img src={image} alt={name} className="skill-icon" />}
        <span className="card-name">
          <i className={icon}></i> {name}
        </span>
      </div>
      <span className="card-level">{level}</span>
      <span className="card-stars">
        {stars.map((star, index) => (
          <span key={index}>
            <i className={`fa-${star ? 'solid' : 'regular'} fa-star`} style={{ color: '#FFD43B' }}></i>
          </span>
        ))}
      </span>
    </div>
  );
}

function SkillSection() {
  const languageSkills = [
    {
      name: 'Speaking',
      level: 'Intermediate',
      stars: [true, true, true, false, false],
      icon: 'fa-solid fa-microphone-lines',
    },
    {
      name: 'Reading',
      level: 'Intermediate',
      stars: [true, true, true, true, false],
      icon: 'fa-brands fa-readme',
    },
    {
      name: 'Listening',
      level: 'Intermediate',
      stars: [true, true, true, false, false],
      icon: 'fa-solid fa-headset',
    },
    {
      name: 'Writing',
      level: 'Advanced',
      stars: [true, true, true, true, true],
      icon: 'fa-solid fa-file-pen',
    },
  ];

  const lifeSkills = [
    {
      name: 'Adaptability & Continuous Learning',
      level: 'Intermediate',
      stars: [true, true, true, true, false],
    },
    {
      name: 'Self Management and Self Awareness',
      level: 'Intermediate',
      stars: [true, true, true, false, false],
    },
    {
      name: 'Social Skills',
      level: 'Beginner',
      stars: [true, true, false, false, false],
    },
  ];

  const technicalSkills = [
    {
      name: 'html',
      img: html
    },
    {
      name: 'css',
      img: css
    },
    {
      name: 'Javascript',
      img: js
    },
    {
      name: 'Photoshop',
      img: ps
    },
    {
      name: 'Bootstrap',
      img: bootstrap
    },
    {
      name: 'Git',
      img: git
    },
    {
      name: 'React',
      img: react
    },
    {
      name: 'MySql',
      img: mysql
    },
    {
      name: 'Python',
      img: python
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="tech-container">
        <div className="content-head" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h2 className="top-heading">My skills</h2>
          <p className="line white-line">what I Know</p>
        </div>
        <div className="para-div">
          <div className="para flex-item" data-aos="zoom-out-right">
            <p>
              I am a Frontend Developer with a passion for learning and a strong foundation in HTML, CSS, and JavaScript and react. I am highly motivated, result-oriented, and a fast learner, always striving to improve my skills. My experience includes using Photoshop for graphic design, Bootstrap for responsive layouts, and basic Git for version control. I am dedicated to delivering high-quality work and staying updated with current technologies.
            </p>
          </div>

          <div className="logo-div flex-item" data-aos="zoom-out-left">
            {technicalSkills.map((skill, index) => (
              <TechicalSkills key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
      <div className="lifeskill-container">
        <div className="content-head" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <p className="line white-line">what I Did</p>
        </div>
        <div className="para-div">
          <div className="logo-div flex-item" data-aos="zoom-out-left">
            {/* Add your skill progress bars here (Problem Solving, HTML, CSS, etc.) */}
          </div>
        </div>
      </div>

      <div className="skills-cards">
        <h1 className="card-heading">English</h1>
        <div className="english-cards">
          {languageSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        <h1 className="card-heading">Life skills</h1>
        <div className="lifeskill-cards">
          {lifeSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
