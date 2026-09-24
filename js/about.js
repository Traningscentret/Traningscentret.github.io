export function renderAbout() {

    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="content-page">
            <h1>Om oss</h1>
            <p>
                Här kommer information om TräningsCentret.
            </p>
            <div class="common-divider"></div>

        </section>
    `;
}