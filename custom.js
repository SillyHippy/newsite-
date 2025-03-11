document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired - initializing mobile menu");
    
    // Debug mobile view status
    console.log("Window width:", window.innerWidth);
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    console.log("Hamburger element found:", hamburger !== null);
    console.log("Mobile menu element found:", mobileMenu !== null);

    if (hamburger && mobileMenu) {
        console.log("Adding click event to hamburger");
        
        // Remove any existing event listeners
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        // Add fresh event listener
        newHamburger.addEventListener('click', function(e) {
            console.log("Hamburger clicked - toggling menu");
            e.preventDefault();
            this.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            body.classList.toggle('mobile-menu-active');
            console.log("Menu active state:", mobileMenu.classList.contains('is-active'));
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-item a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                newHamburger.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
                body.classList.remove('mobile-menu-active');
            });
        });
    } else {
        console.error("Hamburger or mobile menu elements not found!");
    }
    
    // Adjust behavior on resize
    window.addEventListener('resize', function() {
        console.log("Window resized to:", window.innerWidth);
        if (window.innerWidth > 1024 && mobileMenu && mobileMenu.classList.contains('is-active')) {
            hamburger.classList.remove('is-active');
            mobileMenu.classList.remove('is-active');
            body.classList.remove('mobile-menu-active');
        }
    });
});