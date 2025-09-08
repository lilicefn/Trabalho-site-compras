import { criarItemDaLista } from "./Scripts/CriarItemDaLista.js";
import verificarListaVazia from "./Scripts/verificarListaVazia.js";
    //Salva o elemento input dentro da variável inputitem
    const inputItem = document.getElementById("input-item");
    const listaDeCompras = document.getElementById("lista-de-compras");
    const botaoAdicionar = document.getElementById("adicionar-item");
    botaoAdicionar.style.cursor = "pointer"

    //Adiciona um evento fofoqueiro que ficará "escutando" quando um evento de clique no "botaoAdicionar" for acionado
    botaoAdicionar.addEventListener("click", (evento) => {
        evento.preventDefault();                    //evita que qnd a página atualizar todos os dados sejam perdidos
        const itemDaLista = criarItemDaLista();     //chama a função q vai criar o item na lista
        listaDeCompras.appendChild(itemDaLista);    //adiciona esse item ba lista de compras
        verificarListaVazia(listaDeCompras);        //chama a função q vai verificar se  a lista está vazia
        inputItem.value = "";                       //limpa o campo imput ao clicar no botão
    });    

criarItemDaLista(listaDeCompras);
verificarListaVazia(listaDeCompras);