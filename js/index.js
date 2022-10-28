const campoEmail = document.querySelector(".input_email");
const campoSenha = document.querySelector(".input_senha");
const botaoEnviar = document.querySelector(".buttonSubmit__box");
const mensagem = document.getElementById("snackbar");

const email = "gbennemann@hotmail.com";
const senha = "12345";

let ValidaEmail = false;
let ValidaSenha = false;

campoEmail.addEventListener("blur", () => {
    if(campoEmail.value == email) {
        ValidaEmail = true
    } else {
        ValidaEmail = false;
    }
})

campoSenha.addEventListener("blur", () => {
    if(campoSenha.value == senha) {
        ValidaSenha = true;
    } else {
        ValidaSenha = false;
    }
})

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    if(campoEmail.value.length > 0 && campoSenha.value.length > 0) {
        if((ValidaEmail && ValidaSenha)==true){
            toastBar("Login efetuado");
            campoEmail.focus();
            campoEmail.value = "";
            campoSenha.value = "";
        } else {
            toastBar("Alguma de suas informações podem estar incorretas")
            campoSenha.focus();
            campoSenha.value = ""
        }
        } else {
            toastBar("Preencha todos os campos por favor");
            campoEmail.focus();    
        }
})

function toastBar(texto){
    mensagem.innerHTML = texto;
    mensagem.className = "show";
    setTimeout(()=>{ mensagem.className = mensagem.className.replace("show", ""); }, 1000);
}




 