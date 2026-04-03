document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-animate");

    if (hero) {
        setTimeout(() => {
            hero.classList.add("active");
        }, 200);
    }

});