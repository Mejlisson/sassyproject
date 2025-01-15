import "./card1.scss";

export interface AmiiboCardData {
  name: string;
  amiiboSeries: string;
  gameSeries: string;
  image: string;
}

const firstCard = ({ name, amiiboSeries, gameSeries, image }: AmiiboCardData): HTMLDivElement => {
  const card = document.createElement("div");
  card.classList.add("firstCard");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // Fram: Bild
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt = name;
  cardFront.appendChild(imgElement);

  // Bak: Information
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  cardBack.innerHTML = `
    <p><strong>Namn:</strong> ${name}</p>
    <p><strong>Amiibo Series:</strong> ${amiiboSeries}</p>
    <p><strong>Game Series:</strong> ${gameSeries}</p>
  `;

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  // Ta bort-knapp
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = "✖";
  card.appendChild(removeBtn);

  // Klickhändelse för att vända kortet
  card.addEventListener("click", (event) => {
    if (event.target === removeBtn) return; // Förhindra att klick på knappen vänder kortet
    card.classList.toggle("flipped");
  });

  // Klickhändelse för att ta bort kortet
  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  return card;
};

export default firstCard;
