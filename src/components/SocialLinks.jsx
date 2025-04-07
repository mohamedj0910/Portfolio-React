function SocialCard({ iconClass, link, name }) {
  return (
    <a className="social-icon" href={link} target="_blank" rel="noopener noreferrer">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <span>{name}</span>
    </a>
  );
}

function SocialLinks() {
  const socialLinks = [
    {
      iconClass: 'fab fa-github',
      link: 'https://github.com/mohamedj0910',
      name: 'Github',
    },
    {
      iconClass: 'fab fa-linkedin',
      link: 'https://in.linkedin.com/in/mohamedj0910',
      name: 'LinkedIn',
    },
    {
      iconClass: 'fa-brands fa-codepen',
      link: 'https://codepen.io/Mohamed-J',
      name: 'CodePen',
    },
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <SocialCard key={index} {...social} />
      ))}
    </div>
  );
}

export default SocialLinks;
