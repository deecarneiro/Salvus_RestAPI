'use strict'

function clear() {
    //Limpa valores do formulário de cep.
    document.getElementById('ruaCadastro').value=("");
    document.getElementById('bairroCadastro').value=("");
    document.getElementById('cidadeCadastro').value=("");
    document.getElementById('ruaCadastro').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('ruaCadastro').value=(conteudo.logradouro);
    document.getElementById('bairroCadastro').value=(conteudo.bairro);
    document.getElementById('cidadeCadastro').value=(conteudo.localidade);
    document.getElementById('estadoCadastro').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    clear();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('ruaCadastro').value="...";
        document.getElementById('bairroCadastro').value="...";
        document.getElementById('cidadeCadastro').value="...";
        document.getElementById('estadoCadastro').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        clear();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    clear();
}
};