export function renderPrices() {

    const app = document.querySelector("#app");
    app.innerHTML = `
        <section class="schedule-info" 
            aria-label="Schema för TräningsCentret"
            aria-roledescription="information om tider">
            <h1>Priser</h1>
            <p> Här publiceras Träningscentrets priser.</p>
        </section>
        <div class="schedule-image-container">
            <img id='schema-image' src="../PRISER HÄR/priser_test.png" alt="Priser">
        </div>
    `;
}