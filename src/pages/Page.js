export default class Page {
    #div;
    
    constructor(divClass) {
        this.#div = document.createElement("div");
        this.#div.classList.add(divClass);
    }

    addContent(content) {
        this.#div.innerHTML = content;
    }

    display() {
        const content = document.querySelector('#content');
        content.innerHTML = "";
        content.appendChild(this.#div);
    }
};
