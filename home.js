// Get the "Get Started" button and add a click event listener
var getStartedButton = document.querySelector('.button');
getStartedButton.addEventListener('click', function(event) {
  // Prevent the default action of the button (e.g. following a link)
  event.preventDefault();

  // TODO: Add code to open the registration form or login page
});

// Get the navigation links and add a click event listener to each one
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent the default action of the link (e.g. following a link)
    event.preventDefault();

    // Get the ID of the section to scroll to (e.g. "features")
    var sectionId = link.getAttribute('href').substr(1);

    // Scroll to the section using the smooth scroll behavior
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});