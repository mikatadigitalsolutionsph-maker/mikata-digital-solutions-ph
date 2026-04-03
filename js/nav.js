document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    console.log("JS loaded"); // DEBUG

    // OPEN MENU
    menuToggle.addEventListener("click", function () {
        console.log("OPEN CLICKED");
        mobileMenu.classList.add("active");
    });

    // CLOSE MENU
    closeMenu.addEventListener("click", function () {
        console.log("CLOSE CLICKED");
        mobileMenu.classList.remove("active");
    });

    // DROPDOWN
    document.querySelectorAll(".mobile-menu .has-dropdown > a").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        });
    });

});

window.addEventListener("resize", function () {
    const menu = document.getElementById("mobile-menu");

    if (window.innerWidth > 768) {
        menu.classList.remove("active");
    }
});