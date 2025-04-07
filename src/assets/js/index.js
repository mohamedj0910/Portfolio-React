function checkSectionInView() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links');


  let mostVisibleSectionIndex = -1;
  let maxVisibility = 0;

  navLinks.forEach(link => link.classList.remove('nav-active'));

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

    const sectionHeight = rect.height;

    const visibility = visibleHeight / sectionHeight;

    if (visibility > maxVisibility) {
      maxVisibility = visibility;
      mostVisibleSectionIndex = index;
    }
  });

 

  if (mostVisibleSectionIndex !== -1) {
    navLinks[mostVisibleSectionIndex].classList.add('nav-active');
  }
}

window.addEventListener('scroll', checkSectionInView);

document.addEventListener('DOMContentLoaded', checkSectionInView);
