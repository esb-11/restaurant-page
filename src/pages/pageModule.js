const content = document.querySelector("#content");

function createElement(type, content, classes, id) {
    if (!type) return;

    const element = document.createElement(type);
    
    if (content) element.innerText = content;

    if (classes) {
        classes.forEach((cl) => { element.classList.add(cl) });
    }

    if (id) {
        element.setAttribute("id", id);
    }

    return element;
}

function createNestedElement(object) {
    const element = createElement(object.type, "", object.classes, object.id);
    
    if (object.content instanceof Array) {
        object.content.forEach((item) => {
            element.appendChild(createNestedElement(item));
        });
    } else {
        element.innerText = object.content;
    }

    return element;
}

function setPageContent(element) {
    content.innerHTML = "";
    content.appendChild(element);
}

export { createElement, createNestedElement, setPageContent }
