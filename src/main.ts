import "./main.scss";
import firstCard, { AmiiboCardData } from "./components/firstCard/card1";

// Hämta DOM-element
const cardContainer = document.getElementById("card-container") as HTMLElement;
const generateCardBtn = document.getElementById("generate-card-btn") as HTMLButtonElement;

// Funktion för att hämta och visa ett slumpmässigt Amiibo-kort
const fetchRandomAmiibo = async () => {
  try {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const data = await response.json();

    // Hämta en slumpmässig Amiibo
    const randomIndex = Math.floor(Math.random() * data.amiibo.length);
    const randomAmiibo = data.amiibo[randomIndex];

    // Skapa ett nytt kort med data
    const cardData: AmiiboCardData = {
      name: randomAmiibo.name,
      amiiboSeries: randomAmiibo.amiiboSeries,
      gameSeries: randomAmiibo.gameSeries,
      image: randomAmiibo.image,
    };

    const card = firstCard(cardData);
    cardContainer.appendChild(card);
  } catch (error) {
    console.error("Kunde inte hämta data från API:", error);
  }
};

// Lägg till klickhändelse på knappen
generateCardBtn.addEventListener("click", fetchRandomAmiibo);
