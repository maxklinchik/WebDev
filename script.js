document.addEventListener('DOMContentLoaded', () => {
    // Select all links with a hash (#) in their href attribute
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default anchor link behavior
            e.preventDefault();

            // Get the target element's ID from the link's href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the scrollIntoView method for smooth scrolling
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});