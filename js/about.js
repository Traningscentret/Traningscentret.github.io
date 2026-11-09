
export function renderAbout() {

    const app = document.querySelector("#app");

    const images = [
        
        {
            src: "../assets/ledare/barnallakan.png",
            alt: "Ledare för alla kan gympa Barn",
            title: "Ledare för Alla kan gympa Barn"
        },

        {
            src: "../assets/ledare/gruppträn.png",
            alt: "Ledare för alla kan gympa Vuxna",
            title: "Ledare för alla kan gympa Vuxna"
        },
        {
            src: "../assets/ledare/grupträn2.png",
            alt: "Grupptränings ledare ",
            title: "Ledare för Gruppträning"
        },

        {
            src: "../assets/ledare/trupp.png",
            alt: "Trupp ledare",
            title: "Ledare för Truppgymnastik"
        },
        {
            src: "assets/pictures/om_oss_picture.png",
            alt: "Ledare och gymnaster från TräningsCentret",
            title: "Ledare för Barngymnastik"
        },
    ];

    app.innerHTML = `
        <section class="about-page">

            <header class="about-intro">
                <h1>Om oss</h1>

                <p>
                    Från trupp- och gruppgymnastik till
                    barngymnastik och paragymnastik –
                    här finns plats för lek, träning och
                    gemenskap, oavsett ålder eller nivå.
                    Ledarna är utbildade genom Gymnastikförbundet.
                </p>
            </header>

            <div class="common-divider"></div>

            <section class="about-leaders"
                aria-labelledby="about-leaders-title">

                <h2 id="about-leaders-title">
                    ${images[0].title}
                </h2>

                <div class="about-carousel">

                    <div class="about-carousel-images">
                        ${images.map((image, index) => `
                            <img
                                class="about-carousel-image ${index === 0 ? "is-active" : ""}"
                                src="${image.src}"
                                alt="${image.alt}"
                                ${index === 0 ? "" : 'aria-hidden="true"'}
                            >
                        `).join("")}
                    </div>

                    <div class="about-carousel-controls">

                        <button
                            class="about-arrow about-prev"
                            type="button"
                            aria-label="Föregående bild">
                            &#10094;
                        </button>

                        <div class="about-carousel-dots"
                             aria-label="Välj bild">
                            ${images.map((_, index) => `
                                <button
                                    class="about-dot ${index === 0 ? "is-active" : ""}"
                                    type="button"
                                    aria-label="Visa bild ${index + 1}"
                                    aria-pressed="${index === 0}">
                                </button>
                            `).join("")}
                        </div>

                        <button
                            class="about-arrow about-next"
                            type="button"
                            aria-label="Nästa bild">
                            &#10095;
                        </button>

                    </div>
                </div>
            </section>
        </section>
    `;

    initializeAboutCarousel(images);
}

function initializeAboutCarousel(imageData) {
    const carousel = document.querySelector(".about-carousel");

    if (!carousel) return;

    const images = carousel.querySelectorAll(".about-carousel-image");
    const dots = carousel.querySelectorAll(".about-dot");
    const previousButton = carousel.querySelector(".about-prev");
    const nextButton = carousel.querySelector(".about-next");
    const title = document.querySelector("#about-leaders-title");

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        // Update title
        title.textContent = imageData[currentIndex].title;

        images.forEach((image, i) => {
            const isActive = i === currentIndex;
            image.classList.toggle("is-active", isActive);
            image.setAttribute("aria-hidden", String(!isActive));
        });

        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", String(isActive));
        });
    }

    previousButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showImage(index);
        });
    });
}
