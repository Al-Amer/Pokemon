const button = document.getElementById('fetch-poke');
const ul = document.getElementById('todo-list');
// Path to resource
const path = 'https://pokeapi.co/api/v2/pokemon';
let pokeId = 1;


button.addEventListener('click', () => {

  button.disabled = true;
  button.classList.remove('bg-red-500', 'hover:bg-yellow-500');
  button.classList.add('bg-gray-300', 'hover:bg-gray-300');

  fetch(`${path}/${pokeId}`)
    .then((res) => {
      if (!res.ok) throw new Error('Something went wrong');
      return res.json(); 
    })
    .then((data) => {
      console.log(data);
      const li = document.createElement('li');
      li.classList.add(
        'flex',
        'items-center',
        'justify-around',
        'p-2',
        'bg-gray-100',
        'rounded',
      );
      li.innerHTML = `<div class='capitalize'>${data.species.name}</div><img src='${data.sprites.front_default}'/>`;
      ul.appendChild(li);
      li.scrollIntoView({ behavior: 'smooth', block: 'end' });
      pokeId++;
      button.classList.remove('bg-gray-300', 'hover:bg-gray-300');
      button.classList.add('bg-red-500', 'hover:bg-yellow-500');
      button.disabled = false;
    })
    .catch(console.error);
});
