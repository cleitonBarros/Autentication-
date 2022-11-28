//import createdLocalStorage from '../js/localstorage.js'

const btnEyesLogin = document.querySelector('#verSenhaLogin')
const btnEyes = document.querySelector('#verSenha')
const btnEyesConfirm = document.querySelector('#verConfirmSenha')
const signup = document.querySelector('.signUp')
const formLogin = document.querySelector('.login')
const formSign = document.querySelector('.sign-in')
const backTologin = document.querySelector('.backTologin')
const btnCadastrar = document.querySelector('.btn-cadastrar')

const labelNome = document.querySelector('.labelNome')
const labelUser= document.querySelector('.labelUser')
const labelSenha = document.querySelector('.labelSenhaCadastro')
const labelConfirmSenha= document.querySelector('.labelConfirmSenha')
const nomeCad = document.getElementById('name')
const userCad = document.querySelector('#username')
const senhaCadastro = document.querySelector('#senhaCadastro')
const input = document.querySelector('input')

const confirmasenha = document.querySelector('#confirmSenha')

let validNome = false;
let validUser = false;
let validSenha = false;
let validConfirmSenha = false;

nomeCad.addEventListener('keyup', ()=>{
    if(nomeCad.value.length <= 3 && nomeCad.value.length > 0 ){
        nomeCad.setAttribute('style','color:red; border-color: coral; ')
        validNome = false
       
       
    }else {
        nomeCad.setAttribute('style','color:#333;  border-color: #1dd1a1;')
        validNome =true
    }
})
userCad.addEventListener('keyup', ()=>{
    if(userCad.value.length <=4  && userCad.value.length > 0){
        userCad.setAttribute('style','color:red; border-color: coral; ')
        labelUser.setAttribute('style','color:red')
        validUser = false;
        //labelUser.innerHTML ='* Insira no minimo 5 caracters'
       
    }else {
        userCad.setAttribute('style','color:#333; border-color: #1dd1a1; ')
        validUser = true;
       // labelUser.innerHTML =''
    }
})
senhaCadastro.addEventListener('keyup', ()=>{
    if(senhaCadastro.value.length <=4 && senhaCadastro.value.length > 0){
        senhaCadastro.setAttribute('style','color:red; border-color: coral; ')
        labelSenha.setAttribute('style','color:red')
        validSenha = false;
        //labelSenha.innerHTML ='* Insira no minimo 6 caracters'
       
    }else {
        senhaCadastro.setAttribute('style','color: #333;  border-color: #1dd1a1;')
        validSenha = true;
       // labelSenha.innerHTML =''
    }
})
confirmasenha.addEventListener('keyup', ()=>{
    if(confirmasenha.value != senhaCadastro.value){
        confirmasenha.setAttribute('style','color:red; border-color: coral; ')
        labelConfirmSenha.setAttribute('style','color:red')
        validConfirmSenha = false;
        //labelSenha.innerHTML ='* Insira no minimo 6 caracters'
       
    }else {
        confirmasenha.setAttribute('style','color:#333; border-color: #1dd1a1')
        validConfirmSenha = true;
       // labelSenha.innerHTML =''
    }
})
signup.addEventListener('click',(e)=>{
    e.preventDefault();
    formLogin.classList.add('hidden')
    if(formLogin.classList.contains('hidden')){
        formSign.classList.remove('hidden')
    }
})
backTologin.addEventListener('click',(e)=>{
    e.preventDefault();
    formSign.classList.add('hidden')
    if(formSign.classList.contains('hidden')){
        formLogin.classList.remove('hidden')
    }
})

btnEyesLogin.addEventListener('click',(e)=>{
    let inputSenha = document.querySelector('#senhaLogin')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
    btnEyesLogin.classList.toggle('active')
})

btnEyes.addEventListener('click',()=>{
    
    let inputSenha = document.querySelector('#senhaCadastro')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
    btnEyes.classList.toggle('active')
    
})
btnEyesConfirm.addEventListener('click',()=>{
    
    let inputSenha = document.querySelector('#confirmSenha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
    btnEyesConfirm.classList.toggle('active')
})

function createdLocalStorageGoogleLogin(){

    
}

//btnCadastrar.addEventListener('click',cadastrar())

function cadastrar(){ 
    const msgError = document.querySelector('#msgError')
    const msgSuccess = document.querySelector('#msgSuccess')
    if(validNome && validSenha && validUser && validConfirmSenha){

        let listUser = localStorage.getItem('listUser') ? JSON.parse(localStorage.getItem('listUser')) : []
        listUser.push(
            {
                name: nomeCad.value,
                user: userCad.value,
                password: senhaCadastro.value
    
            }
        )

        localStorage.setItem('listUser',JSON.stringify(listUser))

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = 'Cadastrando com sucesso'
        msgError.setAttribute('style', 'display:none')
        
        setTimeout(() =>{
            formSign.classList.add('hidden')
            formLogin.classList.remove('hidden')
        },1000)

    }else{
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Preencha todos os campos corretamente '
        msgSuccess.setAttribute('style', 'display:none')
    }
}

function entrar() {
    let userLogin = document.querySelector('#userLogin')
    let senhaLogin = document.querySelector('#senhaLogin')
    let msgError = document.querySelector('.msgError')
    let listUser = []

    listUser = JSON.parse(localStorage.getItem('listUser'))
    const userValid = listUser.find(item => userLogin.value === item.user && senhaLogin.value === item.password);
    console.log(userValid)
    if (userValid) {
        window.location.href = "../pages/home.html"
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
  
    } else {
        userLogin.setAttribute('style','border-color: coral')
        senhaLogin.setAttribute('style','border-color: coral')
        msgError.setAttribute('style','display: block;')
        msgError.innerHTML ='Algo esta errado, verifique o usuario e senha informados '

        userLogin.focus()
    }
}  

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
    
    window.location.href = "../pages/home.html"

    let listUserGoogle = localStorage.getItem('listUserGoolge') ? JSON.parse(localStorage.getItem('listUserGoogle')) : []
    listUserGoogle.push(
        {
            name: data.name,
            email:data.email,
            subpassword: data.sub,
            image: data.picture

        }
    )
}
window.onload = function () {
    google.accounts.id.initialize({
      client_id: "231082501742-7iv47ijcinfit05k5pbonu6updd1c5ck.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", locale: "pt" },  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}

