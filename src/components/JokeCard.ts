export function JokeCard(joke: { setup: string; punchline: string }) {
  const jokeElement = document.createElement("div");
  jokeElement.classList.add("joke-card");
  jokeElement.innerHTML = `
<h3>${joke.setup}</h3>
<p>${joke.punchline}</p>
`;
  return jokeElement;
}
