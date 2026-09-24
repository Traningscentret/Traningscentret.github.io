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
        
        <section
            class="activites"
            aria-labelledby="activity-section"
        >

            <h2 id="activity-title">Våra aktiviteter</h2>
            <article class="activity-cards">
                <div class="activity-card">
                    <img src="../assets/pictures/A_barngymnastik.png" alt="Barngymnastik">
                    <section class="activity-card-text">
                    <p class="activity-cards-title">
                        Barngymnastik
                    </p>
                    <p class="activity-cards-info-text">
                        Grundläggande motorikträning. <br> Redskapsgymnastik med lek, musik <br> och rörelse. 
                    </p>
                    <a class="activity-card-expand"> Läs mer </a>
                </section>
                    </div>
           
                
                <div class="activity-card">
                    <img src="../assets/pictures/A_gruppgymnastik.png" alt="Gruppgymnastik">
                    <section class="activity-card-text">
                        <p class="activity-cards-title">
                            Barngymnastik
                        </p>
                        <p class="activity-cards-info-text">
                            Grundläggande motorikträning. <br> Redskapsgymnastik med lek, musik <br> och rörelse. 
                        </p>
                        <a class="activity-card-expand"> Läs mer </a>
                    </section>
                </div>

                <div class="activity-card">
                    <img src="../assets/pictures/A_truppgymnastik.png" alt="Truppgymnastik">
                    <section class="activity-card-text">
                    <p class="activity-cards-title">
                        Barngymnastik
                    </p>
                    <p class="activity-cards-info-text">
                        Grundläggande motorikträning. <br> Redskapsgymnastik med lek, musik <br> och rörelse. 
                    </p>
                    <a class="activity-card-expand"> Läs mer </a>
                    </section>
                </div>
    
                <div class="activity-card">
                    <img src="../assets/pictures/A_paragymnastik.png" alt="Paragymnastik">
                    <section class="activity-card-text">
                    <p class="activity-cards-title">
                      Barngymnastik
                    </p>
                    <p class="activity-cards-info-text">
                        Grundläggande motorikträning. <br> Redskapsgymnastik med lek, musik <br> och rörelse. 
                    </p>
                    <a class="activity-card-expand"> Läs mer </a>
                </section>
                    </div>
            </article>
            <p class="activity-contact"> För mer information och Intresseanmälan kontakta oss på mail <strong> traningscentretTrbg@gmail.com </strong> </p>
        </section>
  

        <section class="partners-section" aria-labelledby="partners-title">

            <section class="gymnastics-federation">
                <h2 id="partners-title">Vi är en del av Gymnastikförbundet</h2>

                <div class="federation-logos">
                    <img
                        src="assets/symbols/svensk-gymnastic.png"
                        alt="Svensk Gymnastik"
                    >

                    <img
                        src="assets/pictures/allakangympasymbol.png"
                        alt="Alla kan gympa"
                    >
                </div>
            </section>

            <hr class="partners-divider">

            <section class="sponsors">
                <h2>Våra sponsorer och samarbetspartners</h2>

                <div class="sponsor-logos">
                    <img
                        src="assets/pictures/gretaochjohankocks.png"
                        alt="Greta och Johan Kocks stiftelser"
                    >

                    <img
                        src="assets/pictures/skollovskoloninsymbol.png"
                        alt="Trelleborgs Skollovskoloni"
                    >

                    <img
                        src="assets/pictures/trelleborgskommun.png"
                        alt="Trelleborgs kommun"
                    >

                    <img
                        src="assets/pictures/skanerfsisu.png"
                        alt="RF-SISU Skåne"
                    >
                </div>

                <p class="sponsor-thanks">
                    Ett stort tack till våra fantastiska sponsorer. Ert stöd gör det möjligt för oss att fortsätta utvecklas,
                    skapa värde och genomföra våra idéer. Vi uppskattar ert engagemang och ert förtroende,
                    tillsammans gör vi skillnad.
                </p>
            </section>

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