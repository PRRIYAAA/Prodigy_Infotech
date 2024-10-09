// Project data
const projects = [
    {
        title: "Project 1",
        description: "This is a web development project that I built using HTML, CSS, and JavaScript.",
        link: "#"
    },
    {
        title: "Project 2",
        description: "A modern website built with React.js and styled-components.",
        link: "#"
    },
    {
        title: "Project 3",
        description: "An e-commerce platform developed using Django and PostgreSQL.",
        link: "#"
    }
];
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamically add projects to the page
const projectContainer = document.getElementById('project-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    projectContainer.appendChild(projectElement);
});

// Form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
});


