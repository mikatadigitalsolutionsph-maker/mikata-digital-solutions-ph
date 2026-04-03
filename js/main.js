// =========================
// GLOBAL SCROLL ANIMATION
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".scroll-animate, .text-reveal");

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();

            const inView = rect.top < triggerBottom && rect.bottom > 0;

            if (inView) {
                el.classList.add("active");
            } else {
                el.classList.remove("active"); // 🔥 re-trigger enabled
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();


    // =========================
    // BACK TO TOP BUTTON
    // =========================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // =========================================
    // INTERACTIVE GRID (MOUSE PARALLAX)
    // =========================================

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20; // range: -10 to 10
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        document.body.style.setProperty("--gridX", `${x}px`);
        document.body.style.setProperty("--gridY", `${y}px`);

    });

    // =========================================
    // CURSOR GLOW + GRID PARALLAX
    // =========================================

    document.addEventListener("mousemove", (e) => {

        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        // Glow position
        document.body.style.setProperty("--mouseX", `${xPercent}%`);
        document.body.style.setProperty("--mouseY", `${yPercent}%`);

        // Grid parallax (keep existing effect)
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        document.body.style.setProperty("--gridX", `${x}px`);
        document.body.style.setProperty("--gridY", `${y}px`);

    });

    window.addEventListener("load", () => {
        const loader = document.getElementById("page-loader");

        setTimeout(() => {
            loader.classList.add("hide");
        },  500); // small delay for smooth feel
    });

});