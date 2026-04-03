// =========================================
// HERO ANIMATION (IMPROVED + SAFER)
// =========================================
const hero = document.querySelector(".hero");

if (hero) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    heroObserver.observe(hero);
}


// =========================================
// SCROLL ANIMATIONS (SMOOTHER + CLEANER)
// =========================================
const scrollElements = document.querySelectorAll(".scroll-animate");

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Stop observing after animation (performance boost)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

scrollElements.forEach(el => scrollObserver.observe(el));


// =========================================
// BUTTON CLICK FEEDBACK (MICRO-INTERACTION)
// =========================================
document.querySelectorAll("a, button").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});


// =========================================
// HERO PARALLAX EFFECT (SUBTLE PREMIUM FEEL)
// =========================================
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (hero) {
        hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
    }
});


// =========================================
// OPTIONAL: SMOOTH SCROLL FOR ANCHOR LINKS
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});