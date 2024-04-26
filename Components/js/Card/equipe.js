import { Card } from "./card.js";
const devMode = false;
export function devLog(element) {
    if (devMode)
        console.log(element);
}
;
fetch("../../../Components/base/integrantes.json", { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(".card-section--equipe");
    if (cardSection) {
        _data.map((data, di) => {
            const card = new Card().create(data.nome, `RM ${data.rm}`, { href: data.github, content: "VISITAR GITHUB" }, { src: data.avatar, alt: `Avatar de ${data.nome}`, rounded: "100%" });
            if (card)
                cardSection.appendChild(card);
        });
    }
})
    .catch((error) => console.error(error));