document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    const togglesContainer = document.querySelector(".toggle-container");
    const arrows = document.querySelectorAll(".arrow");

    let currentSlide = 0;

    // Hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Create toggles
    slides.forEach((slide, index) => {
        const toggle = document.createElement("div");
        toggle.classList.add("toggle");
        togglesContainer.appendChild(toggle);
        toggle.addEventListener("click", () => {
            goToSlide(index);
        });
    });

    // Set initial active toggle
    setActiveToggle(0);

    // Add event listeners to arrows
    arrows.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            if (arrow.classList.contains("prev")) {
                goToSlide(currentSlide - 1);
            } else {
                goToSlide(currentSlide + 1);
            }
        });
    });

    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        // Display current slide
        slides[index].style.display = "block";
        currentSlide = index;
        setActiveToggle(index);
    }

    function setActiveToggle(index) {
        const toggles = document.querySelectorAll(".toggle");
        toggles.forEach((toggle, i) => {
            if (i === index) {
                toggle.style.backgroundColor = "black";
            } else {
                toggle.style.backgroundColor = "#bbb";
            }
        });
    }

    // Auto slide
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
});


// Optional JavaScript if you want to control the marquee programmatically
// For example, to pause the marquee on hover

const marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseover', () => {
  marquee.stop();
});

marquee.addEventListener('mouseout', () => {
  marquee.start();
});
