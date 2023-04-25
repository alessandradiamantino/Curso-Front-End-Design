fetch('http://jsonplaceholder.typicode.com/users')
.then(response => {
  console.log('Response', response) //resolvida com sucesso
  return response.json()
})
.then(users => console.lo{})
.catch(error => console.log(error)) //erro