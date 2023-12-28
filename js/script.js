const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      foodMenu = document.getElementById('show-food-menu'),
      foodToggle = document.getElementById('view-menu-button'),
      foodClose = document.getElementById('menu-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Food Menu show */
if(foodToggle){
    foodToggle.addEventListener('click', () =>{
        foodMenu.classList.add('display-food-menu')
    })
}

/* Food Menu hidden */
if(foodClose){
    foodClose.addEventListener('click', () =>{
        foodMenu.classList.remove('display-food-menu')
    })
}

function moveHomeFeatured() {
    var width = window.innerWidth;
    var homeBanner = document.querySelector('.home-banner');
    var homeBannerContent = document.querySelector('.home-banner-content');
    var homeFeatured = document.querySelector('.home-featured');

    if (width <= 992 && homeFeatured && homeBannerContent.contains(homeFeatured)) {
        // Move home-featured to under home-banner
        homeBanner.appendChild(homeFeatured);
    } else if (width > 992 && homeBanner.contains(homeFeatured)) {
        // Move it back under home-banner-content
        homeBannerContent.appendChild(homeFeatured);
    }
}

// Call the function initially
moveHomeFeatured();

// Add an event listener to call the function when the window is resized
window.addEventListener('resize', moveHomeFeatured);

function smoothScroll(event, targetId) {
    event.preventDefault();

    // Check if the clicked element has the .nav-link class
    if (event.target.classList.contains('nav-link')) {
        // Remove .active-link class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active-link');
        });

        // Add .active-link class to the clicked link
        event.target.classList.add('active-link');
    }

    // Scroll to the target section
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



const navLink = document.querySelectorAll('.nav-item')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

document.getElementById('get-location-button').addEventListener('click', function() {
    // Destination address
    var destination = '25c Sapphire St, deva village, Taguig, 1636 Metro Manila';

    // Google Maps URL
    var googleMapsURL = 'https://www.google.com/maps/dir/?api=1';

    // Check if Geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = position.coords.latitude + ',' + position.coords.longitude;
            window.open(googleMapsURL + '&origin=' + userLocation + '&destination=' + encodeURIComponent(destination));
        }, function() {
            alert('Error: The Geolocation service failed.');
        });
    } else {
        // Browser doesn't support Geolocation, redirect without user location
        window.open(googleMapsURL + '&destination=' + encodeURIComponent(destination));
    }
});

