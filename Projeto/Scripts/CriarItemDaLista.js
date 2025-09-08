//Exporta a constante "inputItem" para que ela possa ser usada em outros arquivos javascripts
//Essa constante está ligada ao elemento html com o id "input-item"
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";
export const inputItem = document.getElementById("input-item");
//Exporta a função "criarItemDaLista, que será usada para criar um novo item na lista de compras"

let contador = 0;

export function criarItemDaLista(){
    //Verifica se o campo de entrada está vazio (se o usuário nn digitou)
    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item!");
        return;
    }


    const itemDaLista = document.createElement("li");   //Cria um elemento html <li> q representará um item da lista
    const containerItemDaLista = document.createElement("div"); //cria uma <div> que servirá como container para o conteúdo do item
    containerItemDaLista.classList.add("lista-item-container"); //Adiciona uma classe CSS á <div> para q ela possa ser estilizada no CSS
    const nomeItem = document.createElement("p"); //Cria um parágrafo <p>

    const inputCheckBox = document.createElement("input"); //Define o tipo do input como check box
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;        //Define um id único para o check box
    containerItemDaLista.appendChild(inputCheckBox);    //Adiciona o check box ao container

    //Adiciona um evento para riscar ou remover
    //O risco do texto ao marcar / desmarcar
    inputCheckBox.addEventListener("click", function(){
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none";
        }
    })

    nomeItem.innerText = inputItem.value;   //Define o texto do parágrafo como o valor q o usuário digitou , coloca no parágrafo
    const botao = document.createElement("button"); //Inicia o botão excluir
        // Botão editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    const iconeEditar = document.createElement("i");
    iconeEditar.className = "bi bi-pencil";
    botaoEditar.style.cursor = "pointer";

    containerItemDaLista.appendChild(botaoEditar);
    botaoEditar.appendChild(iconeEditar);

    // Evento de edição
    botaoEditar.addEventListener("click", function() {
        const novoTexto = prompt("Edite o item:", nomeItem.innerText);
        if (novoTexto && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto;
        }
    });

    botao.classList.add("botao-excluir");


    const iconeExcluir = document.createElement("i");   
    iconeExcluir.className = "bi bi-trash3-fill";

    botao.style.cursor = "pointer";

    containerItemDaLista.appendChild(botao); //Adiciona o botão e o ícone excluir dentro do container
    botao.appendChild(iconeExcluir);    //Adiciona o icone excluir dentro do botão
    
    botao.addEventListener("click", function(){
        const confirmacao = confirm("Deseja realmente deletar esse item?");

        if(confirmacao){
            itemDaLista.remove();
            alert("Item deletado");
            verificarListaVazia(listaDeCompras);
        }
    })

    containerItemDaLista.appendChild(nomeItem);  //Adiciona a <div> dentro do <li>, formando a estrutura final do item
    itemDaLista.appendChild(containerItemDaLista)
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    return itemDaLista;     //Retorna o li completo com o item digitado, pronto para ser adicionado na lista
}