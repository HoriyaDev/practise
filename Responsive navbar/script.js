document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');
    const moreLink = document.getElementById('more-link');
    const insightsItem = document.getElementById('insights-item');
    const locationsItem = document.getElementById('locations-item');
    const locationLink = document.getElementById('location-link');
    const locationMenu = document.getElementById('location-menu');
    
    // Toggle navMenu visibility on mobile screens when hamburger button is clicked
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
        // Hide or show the hamburger menu button
        if (navMenu.classList.contains('hidden')) {
            menuButton.classList.remove('hidden');
        } else {
            menuButton.classList.add('hidden');
        }
    });

    // Toggle visibility of Insights and Locations items when More link is clicked
    moreLink.addEventListener('click', function() {
        insightsItem.classList.toggle('hidden');
        locationsItem.classList.toggle('hidden');
        moreLink.classList.add('hidden'); // Hide the "more-link" button after click
    });

    // Toggle visibility of location menu when Location link is clicked
    locationLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        locationMenu.classList.toggle('hidden');
    });

    // Hide location menu if clicking outside of the location link or menu
    document.addEventListener('click', function(event) {
        if (!locationLink.contains(event.target) && !locationMenu.contains(event.target)) {
            locationMenu.classList.add('hidden');
        }
    });
});

