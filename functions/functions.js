//Exemplos:

//1) Criaremos a função que calcula a minha idade, recebendo o ano de meu nascimento
function minhaIdade(anoNascimento) {
    // Considerando que o ano atual é 2018, 
    // subtraimos 2018 pelo valor informado na variável anoNascimento
    return 2018 - anoNascimento;
}
// Gera um log com o retorno da função minhaIdade
// Neste caso irá imprimir o número 28
console.log(minhaIdade(1990));

/*===========================================================================*/

//2) Criaremos uma função que retorna uma string contendo meu nome
// Nota-se que no caso desta função não recebe nenhum parâmetro.
function buscarMeuNome() {
    // Retorna uma string com meu nome completo
    return 'Wanderson Pereira';
}
// Gera um log com o retorno da função buscarMeuNome
// Neste caso irá imprimir o nome 'Wanderson Periera'
console.log(buscarMeuNome());

/*===========================================================================*/
// 3) Criaremos uma função que faz o cálculo da média dos quatros trimestres de um aluno
function calcularMediaTrimestre(nota1, nota2, nota3, nota4) {
    // Para calular a média somamos todos os quatro valores
    // e depois fazemos a divisão do resultada da soma por 4 (quantidade de notas)
    return (nota1 + nota2 + nota3 + nota4) / 4
}
// Gera um log com o retorno da função buscarMeuNome
// Neste caso irá imprimir o numério 25 que é a média do aluno
console.log(calcularMediaTrimestre(10, 20, 30, 40));

/*===========================================================================*/
// Como já sabemos as funçẽos podem retornar valores ou não, como também podem receber parâmetros ou não.
// Faremos uma função que valida se um determinado número é positivo, e caso seja, irá gerar um log informando
// que o número é positovo, caso contrário irá informar que o número é negativo
function validaNumeroPositivo(numero) {
    // Usamos a condicional IF para validar se o número é maior que zero
    // Caso seja, consideramos que é um número positivo
    if (numero >= 0) {
        console.log('Este número é positivo');

    // Aqui usamos o else (SE NÃO), que caso a validação seja false, ou seja, o número seja menor que zero
    // executara as ações no escopo do else
    } else {
        console.log('Este número é negativo');
    }
}
// Chama a função validaNumeroPositivo
// Nota-se que chamamos a função diretamente, sem o uso do console.log
// Fazemos isso por que esta função não retorna nenhum valor, simplismente executa uma ação

// Neste caso irá imprimir o texto 'Este número é negativo'
validaNumeroPositivo(10);
validaNumeroPositivo(-20);

/*===========================================================================*/
// Agora iremos criar uma função genérica e utilizaremos ela em várias parte do código.
// Essa função deverá retonar se o usuário é maior de idade
function usuarioMaiorIdade(idade) {
    // Notamos que retornamos diretamente a validação 
    // Neste caso ele irá retornar true ou false dependendo do valor passado no parâmetro idade
    /**
     Também poderiamos usar a validação da seguinte forma
     if (idade >= 18) {
         return true;
     }

     return false;

     ==========ou==========
     if (idade >= 18) {
         return true
     }

     return false
     */

    // A forma que estrevemos abaixo é uma abreviação das formas acima
    return idade >= 18;
}

// Agora iremos criar uma função que valida se o usuário pode entrar em uma boate
function entrarBoate(nomeUsuario, idadeUsuario) {
    // Aqui chamamos a função que foi criada acima, e atribuimos o valor que ela retorna para a variável maiorIdade
    var maiorIdade = usuarioMaiorIdade(idadeUsuario);
    // Validamos se o valor contido na variável maiorIdade é igual a true
    if (maiorIdade) {
        console.log(nomeUsuario + ", você pode entrar na boate!");
    
    // Caso o valor contido na variável maiorIdade for false
    } else {
        console.log(nomeUsuario + ", você não pode entrar na boate!");        
    }
}

// Agora criaremos uma função que valida se o usuário pode dirigir
// Essa função receberá dois parâmetros, idadeMotorista e um boleando informado se a carteira esta vencida
function habilitado(idadeMotorista, carteiraVencida) {
    // Usamos novamente a chamada da função maior idade, para validar 
    // se o motorista contém um dos critérios para conduzir um veiculo
    var maiorIdade = usuarioMaiorIdade(idadeMotorista);

    // Validamos se o motorista é maior de idade e se a carteira não esta vencida
    // Nota-se que usamos o ! antes da variável, isso nega o seu valor atual, ou seja, 
    // se for verdadeira vira falsa e se for falsa vira verdadeira.
    // Caso as condições que estão no if sejam atendidas, ele informa que o usuário pode passar na blits
    if (maiorIdade && !carteiraVencida) {
        console.log('Pode passar da blits');

    // Caso contrário informa que vamos apreender seu veiculo
    } else {
        console.log('Vamos apreender seu veiculo');
    }
}

// Agora iremos chamar as nossas funções criadas
// Primeiro vamos chamar a função que nos informa se o usuário pode entrar na boate
entrarBoate('Tiago', 10); // Imprime o texto 'Thiago, você não pode entrar na boate!'
entrarBoate('José', 25); // Imprime o texto 'José, você pode entrar na boate!'

// Agora vamos chamar a função que informa se o motorista esta habilitado
habilitado(20, false); // Imprime o texto 'Vamos apreender seu veiculo'
habilitado(15, false); // Imprime o texto 'Vamos apreender seu veiculo'
habilitado(22, true); // Imprime o texto 'Pode passar da blits'

// Imagine que futuramente para ser maior de idade seja 16, iremos alterar em um unico lugar,
// somente na função usuarioMaiorIdade. Isso faz com que o código seja mais confiável.