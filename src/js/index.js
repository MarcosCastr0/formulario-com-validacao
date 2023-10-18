const enviar = document.getElementById('botao')
const campos = document.getElementsByClassName('campos')
const inputs = document.querySelectorAll('input, textarea')

enviar.addEventListener('click',function(){
    for (let i = 0; i < campos.length; i++) {
        
        if (inputs[i].value == ''){
            campos[i].classList.remove('campoObrigatorioPreenchido')
            campos[i].classList.add('campoObrigatorioVazio')
        } else {
            campos[i].classList.remove('campoObrigatorioVazio')
            campos[i].classList.add('campoObrigatorioPreenchido')
        }   
    }
})