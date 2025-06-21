function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('.nav-bar').offsetHeight;
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionPosition - navHeight - 20;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
} 
const filterButtons = document.querySelectorAll('.projects-buttons-container button');
const projectItems = document.querySelectorAll('.project-card');

function filterProjects(category) {
    projectItems.forEach(item => {
        if (category === 'All' || item.dataset.category === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.textContent);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const allButton = document.querySelector('.projects-buttons-container button:nth-child(1)');
    allButton.classList.add('active');
    filterProjects('All');
});

