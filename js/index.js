console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("Starwars Response: ", response);

  const data = await response.json();
  console.log("Starwars Data: ", data);

  const r2d2Eyes = data.results.find((person) => {
    return person.name === "R2-D2";
  }).eye_color;
  console.log("Eye color of R2D2: ", r2d2Eyes);
}

fetchData();
