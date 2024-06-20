document.addEventListener("DOMContentLoaded", () => {
    const contactLinks = document.querySelectorAll(".contact a");
    contactLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#007b00";
        });
    });
});
