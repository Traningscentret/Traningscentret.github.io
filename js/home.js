let carouselInterval;

export function renderHome() {

    const app = document.querySelector("#app");

    app.innerHTML = `

        <section
            class="hero-carousel"
            aria-label="Bilder från TräningsCentret"
            aria-roledescription="bildspel"
        >

            <div class="carousel-slides">

                <figure class="carousel-slide is-active">
                    <img
                        src="assets/pictures/Training1.png"
                        alt="Gymnaster tränar tillsammans i en gymnastikhall"
                    >
                </figure>

                <figure class="carousel-slide">
                    <img
                        src="assets/pictures/Training2.png"
                        alt="Deltagare inom gymnastik tränar tillsammans"
                    >
                </figure>

                <figure class="carousel-slide">
                    <img
                        src="assets/pictures/Training3.png"
                        alt="Gymnastikträning i en gymnastikhall"
                    >
                </figure>

                <figure class="carousel-slide">
                    <img
                        src="assets/pictures/Training4.png"
                        alt="En grupp deltagare inom gymnastik"
                    >
                </figure>

            </div>


            <button
                class="carousel-button carousel-button--previous"
                type="button"
                aria-label="Visa föregående bild"
            >
                <img
                    src="assets/symbols/arrow-header-2.png"
                    alt=""
                    aria-hidden="true"
                >
            </button>


            <button
                class="carousel-button carousel-button--next"
                type="button"
                aria-label="Visa nästa bild"
            >
                <img
                    src="assets/symbols/arrow-header.png"
                    alt=""
                    aria-hidden="true"
                >
            </button>

        </section>


        <section
            class="home-intro"
            aria-labelledby="home-heading"
        >

            <h1 id="home-heading">
                Hitta glädjen i rörelsen – Gympa för alla!
            </h1>

            <p>
                Vi erbjuder gymnastik för barn, ungdomar och vuxna -
                här finns plats för lek, träning och gemenskap,
                oavsett ålder eller nivå.
            </p>

        </section>
    `;

    initializeCarousel();
}


function initializeCarousel() {

    const slides = document.querySelectorAll(".carousel-slide");

    const previousButton =
        document.querySelector(".carousel-button--previous");

    const nextButton =
        document.querySelector(".carousel-button--next");

    let activeIndex = 0;


    function showSlide(index) {

        activeIndex =
            (index + slides.length) % slides.length;


        slides.forEach((slide, slideIndex) => {

            const isActive =
                slideIndex === activeIndex;

            slide.classList.toggle(
                "is-active",
                isActive
            );

            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );
        });
    }


    previousButton.addEventListener("click", () => {
        showSlide(activeIndex - 1);
        restartCarousel();
    });


    nextButton.addEventListener("click", () => {
        showSlide(activeIndex + 1);
        restartCarousel();
    });


    function startCarousel() {

        clearInterval(carouselInterval);

        carouselInterval = setInterval(() => {
            showSlide(activeIndex + 1);
        }, 5000);
    }


    function restartCarousel() {
        startCarousel();
    }


    showSlide(0);

    startCarousel();
}