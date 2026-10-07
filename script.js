// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =========================
// FAVORITE BUTTONS
// =========================

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent === "♡") {
            button.textContent = "♥";
            button.style.color = "red";
        } else {
            button.textContent = "♡";
            button.style.color = "#171717";
        }

    });
});


// =========================
// PROPERTY SEARCH
// =========================

const searchButton = document.querySelector(".search-button");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const selects = document.querySelectorAll(".search-item select");

        const location = selects[0]?.value;
        const type = selects[1]?.value;
        const price = selects[2]?.value;

        if (
            location === "all" &&
            type === "all" &&
            price === "all"
        ) {
            alert("Please select at least one search option.");
            return;
        }

        alert(
            "Search started!\n\n" +
            "Location: " + location +
            "\nType: " + type +
            "\nPrice: " + price
        );

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector("textarea");

        if (!name.value || !email.value || !message.value) {

            alert("Please fill in all fields.");
            return;

        }

        alert(
            "Thank you " +
            name.value +
            "! Your message has been sent."
        );

        contactForm.reset();

    });

}


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});


// =========================
// CURRENT YEAR
// =========================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}