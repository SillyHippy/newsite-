document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired - initializing mobile menu");
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            console.log("Hamburger clicked");
            this.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            document.body.classList.toggle('mobile-menu-active');
        });
        
        // Close menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-item a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
                document.body.classList.remove('mobile-menu-active');
            });
        });
    }
});