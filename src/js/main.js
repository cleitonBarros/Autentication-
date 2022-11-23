const btnEyesLogin = document.querySelector('#verSenhaLogin')
const btnEyes = document.querySelector('#verSenha')
const btnEyesConfirm = document.querySelector('#verConfirmSenha')
const signup = document.querySelector('.signUp')
const formLogin = document.querySelector('.login')
const formSign = document.querySelector('.sign-in')
const backTologin = document.querySelector('.backTologin')

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