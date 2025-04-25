import Page from "../Page.js";

const content = `
<div class="homepage">
<div class="logo">Meio Dia Delivery</div>
<div class="headline">Bem-vindos ao melhor delivery da cidade</div>
<div class="opinions-section">
<div class="opinions-section-title">Opiniões</div>
<div class="opinions">
<div class="opinion">Comida boa</div>
<div class="opinion">top de mil</div>
</div>
</div>
<div class="working-hours">Todos os dias de 10:00 às 16:00.</div>
</div>
`;

const homePage = new Page(content);

export default homePage;
