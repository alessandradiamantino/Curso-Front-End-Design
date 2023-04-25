fetch('http://jsonplaceholder.typicode.com/users')
.then(response => console.log('Response', response)) //resolvida com sucesso
response.js
.catch(error => console.log(error)) //erro