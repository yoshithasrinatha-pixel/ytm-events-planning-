// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome Message
window.onload = function () {
    console.log("YTM Events Planning Website Loaded");
};

// Contact Button
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function () {
        alert("Call Us : 0721008928");
    });
}