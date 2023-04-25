fetch('http://jsonplaceholder.typicode.com/users')
.then(response => console.log('Response', response)) //resolvida com sucesso
.catch(error => console.log()) //erro