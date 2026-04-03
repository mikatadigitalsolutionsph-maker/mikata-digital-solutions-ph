document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HERO ANIMATION
    ========================= */

    const hero = document.querySelector(".hero-animate");

    if (hero) {
        setTimeout(() => hero.classList.add("active"), 200);
    }

});
