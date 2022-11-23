const btnEyesLogin = document.querySelector('#verSenhaLogin')
const btnEyes = document.querySelector('#verSenha')
const btnEyesConfirm = document.querySelector('#verConfirmSenha')
const signup = document.querySelector('.signUp')
const formLogin = document.querySelector('.login')
const formSign = document.querySelector('.sign-in')
const backTologin = document.querySelector('.backTologin')

const labelNome = document.querySelector('.labelNome')
const labelUser= document.querySelector('.labelUser')
const labelSenha = document.querySelector('.labelSenhaCadastro')
const labelConfirmSenha= document.querySelector('.labelConfirmSenha')

const input = document.querySelector('input')
const nome = document.querySelector('#name')
const user = document.querySelector('#username')
const senhaCadastro = document.querySelector('#senhaCadastro')
const confirmasenha = document.querySelector('#confirmSenha')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 3 && nome.value.length > 0){
        nome.setAttribute('style','color:red; border-color: coral; ')
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML ='* Insira no minimo 4 caracters'
       
    }else {
        nome.setAttribute('style','color:#333')
        labelNome.innerHTML =''
    }
})
user.addEventListener('keyup', ()=>{
    if(user.value.length <=4  && user.value.length > 0){
        user.setAttribute('style','color:red; border-color: coral; ')
        labelUser.setAttribute('style','color:red')
        labelUser.innerHTML ='* Insira no minimo 5 caracters'
       
    }else {
        user.setAttribute('style','color:#333')
        labelUser.innerHTML =''
    }
})
senhaCadastro.addEventListener('keyup', ()=>{
    if(senhaCadastro.value.length <=4 && senhaCadastro.value.length > 0){
        senhaCadastro.setAttribute('style','color:red; border-color: coral; ')
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML ='* Insira no minimo 6 caracters'
       
    }else {
        user.setAttribute('style','color:#333')
        labelSenha.innerHTML =''
    }
})

function cadastrar(){   
    alert('botao clicado')
}
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
