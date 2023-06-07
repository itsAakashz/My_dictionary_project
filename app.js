// // Replace this code with your actual code for fetching data from an API or database
// const data = [
//     { word: 'Apple', definition: 'A round fruit with a red, yellow, or green skin and a white inside' },
//     { word: 'Banana', definition: 'A long curved fruit with a yellow skin and soft sweet flesh' },
//     { word: 'Cherry', definition: 'A small round fruit with a red or black skin and a stone inside' },
//     ];
    
//     // Get the main element and clear its contents
//     const main = document.querySelector('main');
//     main.innerHTML = '';
    
//     // Loop through the data and create a word card for each item
//     data.forEach(item => {
//     const card = document.createElement('div');
//     card.classList.add('word-card');
    
//     const title = document.createElement('h3');
//     title.textContent = item.word;
    
//     const definition = document.createElement('p');
//     definition.textContent = item.definition;
    
//     const button = document.createElement('button');
//     button.textContent = 'Read more';
    
//     card.appendChild(title);
//     card.appendChild(definition);
//     card.appendChild(button);
    
//     main.appendChild(card);
//     });

const form = document.querySelector('form');
const input = document.querySelector('input');


form.addEventListener('submit', e => {
  e.preventDefault();

  const input_word = document.getElementById('word').value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input_word}`)
    .then(response => response.json())
    .then(data => {
      // Display the data on the page
      var obj = JSON.parse(data);
    console.log(obj)
    // console.log(data.meanings.0.definitions.0.definitions)
      //document.getElementById("word-card").innerText = data.meanings.0.definitions.0.definitions;   

     
    });
});
