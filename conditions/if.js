// A estrutura de if, valida se uma ou mais condições são verdadeiras ou falsas
// Exemplo
if (CONDIÇÕES) {
    // INSTRUÇÕES
} 

//Validar se um número é maior que o outro
var minhaIdade = 27;
var maiorIdade = 18;
if (minhaIdade > maiorIdade) {
    alert("Posso tirar minha carteira de motorista");
}

/*
 * Para faciliar nossa leitura do código assima entendemos que:
 * 
 * SE (27 FOR MAIOR QUE 18) {
 *   FAÇO ALGUMA AÇÃO
 * }
 */

// Agora colocaremos uma condição caso o if seja falso
if (minhaIdade > maiorIdade) {
    alert("Posso tirar minha carteira de motorista");
} else {
    alert("Não posso nem dirigir");
}
/**
 * Observer que estamos utilizando o else, ele pode ser lido como SE NÃO.
 * Fazendo a leitura novamente do código acima
 * 
 * SE (27 FOR MAIOR QUE 18) {
 *   FAÇO ALGUMA AÇÃO
 * } SE NÃO {
 *   FAÇO OUTRA COISA
 * }
 */