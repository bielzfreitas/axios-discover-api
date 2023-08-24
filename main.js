//guarda a api
const url = "http://localhost:5500/api"

//função para pegar todos usuários (instalar live server)
function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}
//getUsers()

//função para adicionar um usuário (deixar sempre comentada, se não, vai inserir a cada save CTRL+S)
function addNewUser(newUser){
    axios.post(url, newUser )
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.error(error))
}
//addNewUser()

//função para mostrar dados de um usuário
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userId.textContent = response.data.id
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}
getUser(1)

//função para atualizar os dados de um usuário
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//função para deletar um usuário
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
//deleteUser(5)

//chamadas de função
//dados para adicionar um novo usuário
const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

//dados para alteração de um usuário 
const userUpdated = {
    name: "Aloha Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Hawaii"
}
//updateUser(3, userUpdated) //só pode ser executado após a const de update