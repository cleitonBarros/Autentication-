/*
if(localStorage.getItem('token') === null){
    alert('voce precisa esta logado para acessa essa pagina')
    window.location.href ="../html/"
    
}*/
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
//logado.innerHTML = `olá ${userLogado.name}`

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href ='../html/'
}
