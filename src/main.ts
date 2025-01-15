import firstButton from "./components/firstButton/button";

const button = document.getElementById("button") as HTMLDivElement;

button.appendChild(firstButton("First Button"));
button.appendChild(firstButton("Second Button"));