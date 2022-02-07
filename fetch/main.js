const myInit = {
  method: 'GET'
};

fetch('https://jsonplaceholder.typicode.com/users', myInit)
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1', myInit)
  .then(response => response.json())
  .then(data => console.log(data));
