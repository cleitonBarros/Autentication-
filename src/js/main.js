const btnEyes = document.querySelector('.sign-in .fa-eye')
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

btnEyes.addEventListener('click',()=>{
    
    let inputSenha = document.querySelector('#password')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})