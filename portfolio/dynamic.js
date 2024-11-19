// script.js

// Predefined content for each section
const contentMap = {
    about: `
        <h2>About Us</h2>
        <p>Welcome to our website! We are dedicated to providing the best service possible. Our team works tirelessly to ensure your satisfaction.</p>
    `,
    contact: `
        <h2>Contact Us</h2>
        <p>You can reach us at:</p>
        <ul>
            <li>Email: contact@ourwebsite.com</li>
            <li>Phone: +123456789</li>
        </ul>
    `,
    donate: `
        <h2>Donate</h2>
        <p>Your support helps us grow and serve you better. Consider making a contribution today.</p>
    `,
    welcome: `
        <h2>Welcome!</h2>
        <p>Click on the links in the header to load content here.</p>
    `
};

// Add event listeners to header links
document.querySelectorAll('.header-list li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const contentKey = event.target.getAttribute('data-content');
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = contentMap[contentKey] || '<h2>Content not found!</h2>';
    });
});

// Add click event to the static design section
const staticDesign = document.getElementById('static-design');
staticDesign.addEventListener('click', () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = contentMap['welcome']; // Load the welcome content
});
