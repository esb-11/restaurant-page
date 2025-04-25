import { createNestedElement } from "./pageModule";

const menuTitle = {
    type: "div",
    content: "Menu",
    classes: ["menu-title"]
}

const menuItems = {
    type: "div",
    content: [
        {
            type: "div",
            content: createMenuItem(),
            classes: ["menu-item"]
        },
        {
            type: "div",
            content: createMenuItem(),
            classes: ["menu-item"]
        },
        {
            type: "div",
            content: createMenuItem(),
            classes: ["menu-item"]
        }
    ],
    classes: ["menu-container"]
};

const menu = {
    type: "div",
    content: [
        menuTitle,
        menuItems
    ],
    classes: ["menu-page"]
}

const menuPage = createNestedElement(menu);

function createMenuItem(name = "NOME_COMIDA", description = "DESCRICAO_COMIDA") {
    return [
        {
            type: "div",
            content: name,
            classes: ["menu-item-name"]
        },
        {
            type: "div",
            content: description,
            classes: ["menu-item-description"]
        },
    ]
}

export { menuPage }
