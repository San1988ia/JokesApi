interface joke {
  setup: string;
  punchline: string;
}
const programmingJokeContainer = document.getElementById(
  "programming-joke-container"
) as HTMLElement;
const randomJokeContainer = document.getElementById(
  "random-joke-container"
) as HTMLElement;
const jokeTypesContainer = document.getElementById(
  "joke-types-container"
) as HTMLElement;

export async function fetchJoke(category: string) {
  console.log("fetch Joke: " + category);
  console.log("test");
  let url = "";

  switch (category) {
    case "programming":
      url = "https://official-joke-api.appspot.com/jokes/programming/random";
      break;
    case "random":
      url = "https://official-joke-api.appspot.com/random_joke";
      break;
    case "types":
      url = "https://official-joke-api.appspot.com/types";
      break;
    default:
      console.error("Unknown category");
      return [];
  }
  try {
    const response = await fetch(url);
    const data =
      category === "programming"
        ? await response.json()
        : [await response.json()];
    updateJokeContainer(data, category);
  } catch (error) {
    console.error("fel vid hämtning av skämt", error);
    if (category === "programming") {
      programmingJokeContainer.innerHTML =
        "kunde inte hämta programmeringsskämt";
    } else if (category === "random") {
      randomJokeContainer.innerHTML = "kunde inte hämta slumpmässiga skämt";
    }
  }
  return null;
}
//funktion för att visa skämt i rätt container
function updateJokeContainer(jokes: joke[], category: string) {
  if (category === "programming") {
    programmingJokeContainer.innerHTML = `
            <h3>${jokes[0].setup}</h3>
            <p>${jokes[0].punchline}</p>
            `;
  } else if (category === "random") {
    randomJokeContainer.innerHTML = `
            <h3>${jokes[0].setup}</h3>
            <p>${jokes[0].punchline}</p>
            `;
  }
}
// //funktion för att visa skämttyper
function displayJokeTypes(types: string[]) {
  //console.log("visar skämttyper:" types);--den gav mig error
  jokeTypesContainer.innerHTML = "<h3>Skämttyper:</h3>";
  types.forEach((type) => {
    const typeElement = document.createElement("div");
    typeElement.classList.add("type-card");
    typeElement.innerText = type;
    jokeTypesContainer.appendChild(typeElement);
  });
}
//Funktion för att hämta skämttyper och visa dem
export async function fetchJokeTypes() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/types");
    const types = await response.json();
    console.log("skämttyper från api:", types);
    displayJokeTypes(types);
  } catch (error) {
    console.error("fel vid hämtning av skämttyper:", error);
    jokeTypesContainer.innerHTML = "kunde inte hämta skämttyper.";
  }
}
