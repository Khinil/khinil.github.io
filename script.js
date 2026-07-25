/* ==========================================================
   RESEARCH PORTFOLIO JAVASCRIPT
   Author : Khinil Sahu
========================================================== */


/* ==========================================================
   TYPING ANIMATION
========================================================== */

const words = [
    "Corrosion Fatigue",
    "Offshore Structures",
    "Computational Fracture Mechanics",
    "Finite Element Analysis"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();



/* ==========================================================
   NAVBAR BACKGROUND ON SCROLL
========================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#08111f";

        navbar.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(10,18,42,.95)";

        navbar.style.boxShadow = "none";
    }

});



/* ==========================================================
   FADE-IN ANIMATION
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==========================================================
   ACTIVE NAVIGATION LINK
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)

        topButton.style.display = "block";

    else

        topButton.style.display = "none";

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================================
   HERO IMAGE HOVER EFFECT
========================================================== */

const photo = document.querySelector(".hero-photo");

if (photo) {

    photo.addEventListener("mousemove", () => {

        photo.style.transform = "scale(1.05)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "scale(1)";

    });

}



/* ==========================================================
   END OF FILE
========================================================== */
