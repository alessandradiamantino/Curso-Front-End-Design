fetch('http://jsonplaceholder.typicode.com/usersy')
.then(response => console.log('Response', response)) //resolvida com sucesso
.catch(error => console.log(error)) //erro