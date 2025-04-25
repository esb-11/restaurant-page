import { content } from "./index.js";

function createElement(type, content, classes, id) {
    if (!type) return;

    const element = document.createElement(type);
    
    if (content) element.innerText = content;

    if (classes) {
        classes.forEach((cl) => { element.classlist.add(cl) });
    }

    if (id) {
        element.setAttribute("id", id);
    }

    return element;
}

function setPageContent(element) {
    content.innerHTML = "";
    content.appendChild(element);
}

export { createElement }
