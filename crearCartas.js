

export function crearCartas(contenedor) {

    const cartas = 12;
    const divCards = document.createElement("div");
    divCards.id = "divCards";

    for (let i = 1; i <= cartas; i++) {
        let card = document.createElement("div");
        card.id = `card${i}`;
        card.classList = `card`;
        card.innerText = `${i}`;

        divCards.append(card);
    }
}
