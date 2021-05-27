// Переписать с async/await
// Доп вопрос: как сделать паралельно 5 fetch?
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

// -=-=-=-=-=-

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/2'),
    fetch('https://jsonplaceholder.typicode.com/posts/3')
])
.then((response) => response)
.then((json) => console.log(json))
