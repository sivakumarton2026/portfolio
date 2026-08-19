// ================================
// Portfolio JavaScript
// ================================

// Welcome message
console.log("Welcome to Tonysha's Portfolio 🚀");


// ================================
// Smooth navigation
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// Scroll reveal animation
// ================================

const cards = document.querySelectorAll(
    ".info-card, .skill-card, .project-card, .certificate-card"
);

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


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// ================================
// Current year in footer
// ================================

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `<p>© ${year} Tonysha S. | MCA Student & Aspiring Data Analyst</p>`;

}