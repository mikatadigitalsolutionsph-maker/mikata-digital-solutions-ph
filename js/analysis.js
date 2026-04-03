// =========================================
// HERO ANIMATION (CONSISTENT SYSTEM)
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".ba-hero");

    if (hero) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                hero.classList.add("start");
            }, 100);
        });
    }

});


// =========================================
// SCROLL ANIMATIONS (REUSABLE SYSTEM)
// =========================================

const scrollElements = document.querySelectorAll(".scroll-animate");

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

scrollElements.forEach(el => scrollObserver.observe(el));


// =========================================
// HERO PARALLAX (SUBTLE DEPTH)
// =========================================

const hero = document.querySelector(".ba-hero");

if (hero) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
    });
}


// =========================================
// IMAGE HOVER INTERACTION (PREMIUM)
// =========================================

document.querySelectorAll(".ba-image").forEach(container => {

    container.addEventListener("mousemove", (e) => {

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 10;
        const moveY = (y / rect.height - 0.5) * 10;

        const img = container.querySelector("img");

        if (img) {
            img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
        }

    });

    container.addEventListener("mouseleave", () => {
        const img = container.querySelector("img");
        if (img) {
            img.style.transform = "";
        }
    });

});


// =========================================
// BUTTON MICRO INTERACTION
// =========================================

document.querySelectorAll("a, button").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});