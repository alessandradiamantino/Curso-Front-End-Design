fetch('http://jsonplaceholder.typicode.com/users')
.then(response => console.log('Response', response)) //resolvida com sucessoresponse.json{
  return response.json()
}
.catch(error => console.log(error)) //erro