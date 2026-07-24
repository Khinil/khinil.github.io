const words = [
    "Corrosion Fatigue",
    "Offshore Structures",
    "Molecular-Level Fracture"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1800;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Fade-in animation while scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate(
                [
                    { opacity: 0, transform: "translateY(40px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ],
                {
                    duration: 700,
                    fill: "forwards"
                }
            );
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
