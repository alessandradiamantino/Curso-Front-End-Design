fetch('http://jsonplaceholder.typicode.com/users')
.then(response => console.log('Response', response)) //resolvida com sucesso
response
.catch(error => console.log(error)) //erro