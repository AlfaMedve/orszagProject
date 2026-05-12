const topBtn = document.getElementById("topBtn");

// scroll megjelenés
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

// kattintás
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // 🔊 opcionális hang (ha van file)
    // const sound = new Audio("kepek/click.mp3");
    // sound.play();
});