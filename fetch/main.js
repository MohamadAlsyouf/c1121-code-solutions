fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.log('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed!', err));
