fetch('http://jsonplaceholder.typicode.com/users') //busca resposta da api
.then(response => { //btenho uma resposta e retorno uma promise usando o método return response.json( )
  console.log('Response', response) //resolvida com sucesso
  return response.json()
})
.then(users => console.log(users))
.catch(error => console.log(error)) //erro

//encadeio um segundo .then usando os dados que a primeira função está retornando.