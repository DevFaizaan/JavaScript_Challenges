fetch(
  '.https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json '
)
  .then((response) => response.json())
  .then((json) => console.log(json));

axios
  .get(
    'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json'
  )
  .then((response) => {
    const hero = response.data;
    console.log('Hero ', hero);

    const squadName = document.createElement('h1');
    squadName.innerText = hero.squadName;
    console.log('Squadname ', squadName);

    const base = document.createElement('h2');
  });
