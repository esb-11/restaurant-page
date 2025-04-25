export default (function () {
    const LOGO = "Meio Dia Delivery";
    const HEADLINE = "Bem-vindos ao melhor delivery da cidade";
    const OPINIONS = ["Comida saborosa por um valor acessível, dá pra perceber o carinho que é colocado em cada marmita."];
    const WORKING_HOURS = "Todos os dias de 10:00 às 16:00.";

    const home = document.createElement("div");
    home.classList.add("home-page");
    home.appendChild(createPageElement(LOGO, "logo"));
    home.appendChild(createPageElement(HEADLINE, "headline"));
    home.appendChild(createOpinions(OPINIONS));
    home.appendChild(createPageElement(WORKING_HOURS, "working_hours"));

    function createPageElement(str, divClass) {
        const div = document.createElement("div");
        div.innerText = str;
        div.classList.add(divClass);
        return div;
    }

    function createOpinions(array) {
        const opinionsDiv = document.createElement("div");
        array.forEach((op) => {
            opinionsDiv.appendChild(createPageElement(op, "opinion"));
        });
        return opinionsDiv;
    }

    return home;
})();
