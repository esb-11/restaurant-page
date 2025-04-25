import { createNestedElement } from "./pageModule";

const logo = {
    type: "div",
    content: [
        {
            type: "div",
            content: "Delicia",
            classes: ["logo-upper-text"]
        },
        {
            type: "div",
            content: "na Brasa",
            classes: ["logo-bottom-text"]
        }
    ],
    classes: ["home-page-logo"]
};

const description = {
    type: "p",
    content: "Comida feita na brasa e com muito carinho!",
    classes: ["home-page-description"]
};

const menuButton = {
    type: "button",
    content: "Abrir Menu",
    classes: ["open-menu-button"]
};

const page = {
    type: "div",
    content: [
        logo,
        description,
        menuButton
    ],
    classes: ["home-page"]
};

const homePage = createNestedElement(page);

export { homePage }
