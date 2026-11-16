
// Select menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

// Open and close mobile navigation menu
menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("is-open");

    // Update accessibility status
    const isOpen = navLinks.classList.contains("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

});

// Close menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open menu");

    });

});
