document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href");

            if (targetSectionId === "#all") {
                showAllSections();
            } else {
                showSectionById(targetSectionId);
            }
        });
    });
});

function scrollToSection(section) {
    const yOffset = -100; // Ajustez cette valeur pour compenser la hauteur de la barre de navigation fixe
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}

function showSectionById(sectionId) {
    const sections = document.querySelectorAll("main section");

    sections.forEach((section) => {
        if (section.id === sectionId.slice(1)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function showAllSections() {
    const sections = document.querySelectorAll("main section");

    sections.forEach((section) => {
        section.style.display = "block";
    });
}
