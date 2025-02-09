import "./style.scss";
import { fetchJoke, fetchJokeTypes } from "./services/jokeService";
// //När sidan laddas hämtas skämt för alla sektioner
document.addEventListener("DOMContentLoaded", () => {
  fetchJoke("programming"); //programmeringsskämt
  fetchJoke("random"); //slumpmässiga skämt
  fetchJokeTypes(); //skämttyper
});

//Klicklistener för varje sektion
document
  .getElementById("programming-joke-header")
  ?.addEventListener("click", () => fetchJoke("programming"));
document
  .getElementById("random-joke-header")
  ?.addEventListener("click", () => fetchJoke("random"));

// Get the select element by its id.
document
  .getElementById("joke-type-dropdown")
  ?.addEventListener("change", function (event) {
    // Retrieve the selected value.
    let selectedValue = event.target.value;

    // Call another method and pass the selected value.
    fetchJoke(selectedValue);
  });
