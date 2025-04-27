import { setPageContent } from "./pages/pageModule";
import { homePage } from "./pages/homePage";
import { menuPage } from "./pages/menuPage";
import { aboutPage } from "./pages/aboutPage";
import "./styles.css"

setPageContent(homePage);

document.addEventListener("click", changePage);

function changePage(e) {
    const page = e.target.innerText;
    switch (page) {
        case "Home":
            setPageContent(homePage);
            break;
        case "Menu":
        case "Abrir Menu":
            setPageContent(menuPage);
            break;
        case "About":
            setPageContent(aboutPage);
            break;
        default:
            break;
    }
}
