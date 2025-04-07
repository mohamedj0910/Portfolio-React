import SocialLinks from './SocialLinks';
import leatherLand from '../assets/images/leather-land.png';
import RandomQuote from '../assets/images/random-quote-generator.png';
import tesla from '../assets/images/tesla-project.png';

function openLink(link){
  window.open(link, '_blank');
}

function ProjectCard({ imgSrc, altText, projectLink, projectName, languages, onClick }) {

  return (
    <div className="project" data-aos="fade-up" data-aos-anchor-placement="center-bottom" onClick={onClick}>
      <div className="project-img">
        <img src={imgSrc} alt={altText} />
      </div>
      <div>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <span className="project-name">{projectName}</span>
          <span className="lang-used">{languages}</span>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      imgSrc: leatherLand,
      altText: 'Leather Land',
      projectLink: 'https://leatherland.netlify.app/',
      projectName: 'Leather Land (E-commerce)',
      languages: 'HTML, CSS, and JS',
    },
    {
      imgSrc: RandomQuote,
      altText: 'Random Quote Generator',
      projectLink: 'https://mohamedj0910.github.io/random-quote-generator/',
      projectName: 'Random Quote Generator',
      languages: 'HTML, CSS, and JS',
    },
    {
      imgSrc: tesla,
      altText: 'Nikolas Tesla Tribute Page',
      projectLink: 'https://mohamedj0910.github.io/nikolatesla/',
      projectName: 'Nikola Tesla Tribute Page',
      languages: 'HTML and CSS',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="content-head" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 className="top-heading">My projects</h2>
        <p className="line black-line">Check my work</p>
      </div>

      <div className="project-div">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            onClick={() => openLink(project.projectLink)} 
          />
        ))}
      </div>

      <div className="see-more-projects">
        <div className="see-more">See More On</div>
        <SocialLinks />
      </div>
    </section>
  );
}

export default Projects;
