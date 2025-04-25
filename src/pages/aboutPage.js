import { createNestedElement } from "./pageModule";

const about = {
    type: "div",
    content: [
        {
            type: "div",
            content: "About",
            classes: ["about-title"]
        },
        {
            type: "div",
            content: [
                {
                    type: "div",
                    content: "Endereço",
                    classes: ["about-section-title"]        
                },
                {
                    type: "div",
                    content: "Rua XXX, numero XXX, XXX - XX,CEP XXX",
                    classes: ["about-section-content"]        
                }
            ],
            classes: ["about-section"]
        },
        {
            type: "div",
            content: [
                {
                    type: "div",
                    content: "Contato",
                    classes: ["about-section-title"]        
                },
                {
                    type: "div",
                    content: "(XX) 9XXXX-XXXX",
                    classes: ["about-section-content"]        
                }
            ],
            classes: ["about-section"]
        },
        {
            type: "div",
            content: [
                {
                    type: "div",
                    content: "Horário de funcionamento",
                    classes: ["about-section-title"]        
                },
                {
                    type: "div",
                    content: "XX à XX, de XX às XX",
                    classes: ["about-section-content"]        
                }
            ],
            classes: ["about-section"]
        }
    ],
    classes: ["about-page"]
};

const aboutPage = createNestedElement(about);

export { aboutPage };