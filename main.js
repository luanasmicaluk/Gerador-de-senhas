const numeroSenha = document.querySelector('.parametr0-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const camapoSenha = document.querySelector*('#campo-senha');
const checkbox = document.querySelectorAll('checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentatamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
gerasenha();
}
function aumentaTamanho()
if (tamanhoSenha <20) {
    // tamanhoSenha = tamanhoSenha+1;
    tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}

