//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var senhaBar = document.querySelector("#passStrengthMeter");


/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/

function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^[A-Z][a-z]{6,}/;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'nome' que originou o evento   

    if(e.target.value.trim().match(regexNome)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }       
}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > parseInt(date.getFullYear()) ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()}.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < parseInt(date.getFullYear())-124 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${(date.getFullYear())-124}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
}
);

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarEmail*/
email.addEventListener('focusout', validarEmail);

/*declaração tradicional de função validarEmail(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'email'
*/

function validarEmail(e){ 
    //declaração da expressão regular para definir o formato de um email válido
    const regexEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.(br|com|net|org)/;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'email' que originou o evento   

    if(e.target.value.trim().match(regexEmail)==null){
        //muda o conteúdo e o estilo do objeto emailHelp que referencia o elemento html com id=inputEmailHelp
        emailHelp.textContent = "Formato de email inválido"; 
        emailHelp.style.color="red";
    }
    else{
        emailHelp.textContent = "";
    }       
}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarSenha*/
senha.addEventListener('focusout', validarSenha);

/*declaração tradicional de função validarSenha(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'senha'
*/

function validarSenha(e){ 

    //declaração da expressão regular para definir o formato de um senha válido
    const regexSenha = /.{6,20}/;

    // expressão regular para encontrar caracteres especiais
    var regexEspeciais = /[#@%&!+]/g;

    // expressão regular para encontrar caracteres especiais
    var regexNumeros = /[0-9]/g;

    // expressão regular para encontrar caracteres especiais
    var regexLetras = /[a-zA-Z]/g;
    
    var lenSenha = e.target.value.trim().length;
    console.log('Tamanho da senha:', lenSenha);

    // método para encontrar todas as correspondências de numeros na senha
    var ocorrenciasNumeros = e.target.value.trim().match(regexNumeros);
    console.log(ocorrenciasNumeros);
    
    // método para encontrar todas as correspondências de caracteres letras na senha
    var ocorrenciasLetras = e.target.value.trim().match(regexLetras);
    console.log(ocorrenciasLetras);
    
    // método para encontrar todas as correspondências de caracteres especiais na senha
    var ocorrenciasEspeciais = e.target.value.trim().match(regexEspeciais);
    console.log(ocorrenciasEspeciais);

    // Verifica se há caracteres especiais, letras e números na 'senha'. Caso não possua, exibe senha inválida.
    if((!ocorrenciasEspeciais) || (!ocorrenciasLetras) || (!ocorrenciasNumeros) || (lenSenha > 20) || (lenSenha < 6)){
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        senhaHelp.textContent = "Senha inválida"; 
        senhaHelp.style.color="red";
        // return aqui é importante para que não continue no código e acabe verificando outras coisas. Aqui já deu erro, pode parar já.
        return ;
    }
    else{
        senhaHelp.textContent = "";
    }   

    console.log('Passou na verificação de regex inicial');

    // Verifica a presença do nome de usuário e da data de nascimento na senha
    if((e.target.value.trim().includes(nome.value)) || (e.target.value.trim().includes(ano.value))){
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        senhaHelp.textContent = "Senha inválida"; 
        senhaHelp.style.color="red";
        passStrengthMeter.value = '0';
        // return aqui é importante para que não continue no código e acabe verificando outras coisas. Aqui já deu erro, pode parar já.
        return;
    }
    else{
        senhaHelp.textContent = "";
    }

    console.log('Passou na verificação de nome e ano');

    // Verificar a força da senha

    // Regex de maiúsculas
    var regexMaiusculas = /[A-Z]/g;
    var ocorrenciasMaiusculas = ocorrenciasLetras.join('').match(regexMaiusculas);
    if(ocorrenciasMaiusculas){
        ocorrenciasMaiusculas = ocorrenciasMaiusculas.length;
    }
    else{
        ocorrenciasMaiusculas = 0;
    }
    console.log('Ocorrencias maiusculas', ocorrenciasMaiusculas.length);

    // console.log('Verificações');
    // console.log(lenSenha > 12);
    // console.log(ocorrenciasEspeciais.length > 1);
    // console.log(ocorrenciasNumeros.length > 1);
    // console.log(ocorrenciasMaiusculas.length > 1);

    // Senha forte
    if((lenSenha > 12) && (ocorrenciasEspeciais.length > 1) && (ocorrenciasNumeros.length > 1) && (ocorrenciasMaiusculas > 1)){
        senhaHelp.textContent = "Senha Forte";
        senhaHelp.style.color="green";
        passStrengthMeter.value = '30';
        return ;
    }

    // Senha moderada
    if((lenSenha > 8) && (ocorrenciasEspeciais.length > 0) && (ocorrenciasNumeros.length > 0) && (ocorrenciasMaiusculas > 0)){
        senhaHelp.textContent = "Senha moderada";
        senhaHelp.style.color="yellow";
        passStrengthMeter.value = '20';
        return ;
    }

    // Senha fraca
    if((lenSenha < 9) && (ocorrenciasEspeciais.length > 0) && (ocorrenciasNumeros.length > 0)){
        senhaHelp.textContent = "Senha fraca";
        senhaHelp.style.color="red";
        passStrengthMeter.value = '10';
        return ;
    }



    // console.log(e); //impressão em console do objeto evento e
    //console.log(e.target.value); //impressão em console do valor do objeto 'senha' que originou o evento   

}