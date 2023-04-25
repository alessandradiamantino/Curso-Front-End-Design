fetch('http://jsonplaceholder.typicode.com/users')
.then(response => {
  console.log('Response', response) //resolvida com sucesso
  return response.json()
})
.then(users => console.log(users){})
.catch(error => console.log(error)) //erro