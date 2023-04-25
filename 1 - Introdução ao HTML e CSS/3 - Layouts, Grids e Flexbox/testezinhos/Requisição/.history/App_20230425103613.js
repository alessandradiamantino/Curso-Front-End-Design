async function retornoAPI (){
  const options = {method: 'GET'};
  try {
    let response = await fetch('http://jsonplaceholder.typicode.com/users', options)
    let json = response.json()
    console.log(json)
  }catch(e){
    console.log(e)
  }
}


/*const options = {method: 'GET'};
fetch('http://jsonplaceholder.typicode.com/users', options) //busca resposta da api
.then(response => { //tenho uma resposta e retorno uma promise usando o método return response.json( )
  console.log('Response', response) //resolvida com sucesso
  return response.json()
})
.then(users => console.log(users)) //encadeio um segundo .then usando os dados que a primeira função está retornando.
.catch(error => console.log(error)) //erro
*/
