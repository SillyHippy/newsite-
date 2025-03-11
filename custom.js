document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired - initializing mobile menu");
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    console.log("Hamburger element:", hamburger);
    console.log("Mobile menu element:", mobileMenu);

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            console.log("Hamburger clicked - toggling menu");
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            body.classList.toggle('mobile-menu-active');
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-item a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
                body.classList.remove('mobile-menu-active');
            });
        });
    } else {
        console.error("Hamburger or mobile menu elements not found!");
    }
    
    // Adjust behavior on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && mobileMenu && mobileMenu.classList.contains('is-active')) {
            hamburger.classList.remove('is-active');
            mobileMenu.classList.remove('is-active');
            body.classList.remove('mobile-menu-active');
        }
    });
});