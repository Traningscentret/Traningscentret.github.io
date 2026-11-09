export function renderSchedule() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="schedule-info" 
            aria-label="Schema för TräningsCentret"
            aria-roledescription="information om tider">
            <h1>Schema</h1>
            <p>Här publiceras Träningscentrets schema</p>
        </section>
        <div class="schedule-image-container">
            <img id='schema-image' src="../SCHEMA HÄR/Schema_Test.png" alt="Schema för TräningsCentret">
        </div>
    `;
}
