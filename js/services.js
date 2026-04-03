// =========================================
// HERO ANIMATION (SMOOTH + RELIABLE)
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".services-hero");

    if (hero) {

        // Use requestAnimationFrame for smoother start
        requestAnimationFrame(() => {
            setTimeout(() => {
                hero.classList.add("start");
            }, 100);
        });

    }

});


// =========================================
// OPTIONAL: HERO PARALLAX (MATCH HOMEPAGE)
// =========================================

const hero = document.querySelector(".services-hero");

if (hero) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
    });
}


// =========================================
// OPTIONAL: IMAGE HOVER DEPTH EFFECT
// =========================================

document.querySelectorAll(".service-image, .service2-image, .service3-image")
.forEach(container => {

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