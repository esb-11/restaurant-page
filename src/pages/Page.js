export default class Page {
    #div;
    
    constructor(content) {
        this.#div = document.createElement("div");
        this.setContent(content);   
    }

    setContent(content) {
        this.#div.innerHTML = content;
    }

    getContent() {
        return this.#div.innerHTML;
    };

    display() {
        const content = document.querySelector('#content');
        content.innerHTML = "";
        content.appendChild(this.#div);
    }
};
