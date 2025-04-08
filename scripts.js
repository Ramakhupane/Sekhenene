
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]'); 

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  
            const targetId = link.getAttribute('href').substring(1);  
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, 
                    behavior: 'smooth'  
                });
            }
        });
    });
});

const toggleNavBar = () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active'); 
};


document.getElementById('menu-toggle').addEventListener('click', toggleNavBar);


const scrollToTopButton = document.getElementById('scrollToTopButton');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block'; 
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const validateForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return false;
    }
    alert('Thank you for reaching out! We will get back to you soon.');
    return true;
};
