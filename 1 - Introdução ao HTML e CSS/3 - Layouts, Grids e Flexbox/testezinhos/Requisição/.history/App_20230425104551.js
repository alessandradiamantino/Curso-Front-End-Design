const options = {method: 'GET'};
fetch('https://randomuser.me/api/?gender=female', options) //busca resposta da api
.then(response => { //tenho uma resposta e retorno uma promise usando o método return response.json( )
  console.log('Response', response.result) //resolvida com sucesso
  return response.json()
})
.then(users => console.log(users)) //encadeio um segundo .then usando os dados que a primeira função está retornando.
.catch(error => console.log(error)) //erro

