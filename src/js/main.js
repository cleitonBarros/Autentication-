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

const msgError = document.querySelector('#msgError')
const msgSuccess = document.querySelector('#msgSucess')

let validNome = false;
let validUser = false;
let validSenha = false;
let validConfirmSenha = false;


nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 3 && nome.value.length > 0){
        nome.setAttribute('style','color:red; border-color: coral; ')
        labelNome.setAttribute('style','color:red')
        validNome = false
       // labelNome.innerHTML ='* Insira no minimo 4 caracters'
       
    }else {
        nome.setAttribute('style','color:#333;  border-color: #1dd1a1;')
        //labelNome.innerHTML =''
        validNome =true
    }
})
user.addEventListener('keyup', ()=>{
    if(user.value.length <=4  && user.value.length > 0){
        user.setAttribute('style','color:red; border-color: coral; ')
        labelUser.setAttribute('style','color:red')
        validUser = false;
        //labelUser.innerHTML ='* Insira no minimo 5 caracters'
       
    }else {
        user.setAttribute('style','color:#333; border-color: #1dd1a1; ')
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
function cadastrar(){   
    if(validNome || validSenha || validUser || validConfirmSenha){
        msgSuccess.setAttribute('style', 'display:block')

    }else{
        msgError.setAttribute('style', 'display:block')
    }
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
