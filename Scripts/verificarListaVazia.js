const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll("li"); //Seleciona todos os elementos <li> da lista de compras e retorna um array
    if (itensDaLista.length === 0) {                            //Se não houver nenhum <li> na lista (lista vazia)
        mensagemListaVazia.style.display = "block";             //Exibe a mensagem da lista vazia, display propriedade do css para exibir ou não
    }else{
        mensagemListaVazia.style.display = "none";              //"none" escoonde a mensagem
    }
}

//Exporta a função para ser usada em outro arquivo js
export default verificarListaVazia;