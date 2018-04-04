function inserePlacar() {
    var tabela = $(".placar").find("tbody");
    var usuario = "Matheus";
    var numPalavras = $("#contador-palavras").text();
    var numCaracteres = $("#contador-caracteres").text();

    //JEITO ERRADO
    //var linha = "<tr><td>" + usuario + "</td><td>" + numPalavras + " Palavras</td><td>" + numCaracteres + " Caracteres</td><td>" + botaoRemover + "</td></tr>";

    //JEITO CORRETO (POR OBJETO)
    var linha = novaLinha(usuario, numPalavras, numCaracteres); //Cria objeto
    linha.find(".botao-remover").click(removeLinha); //Anexa evento de clique antes de incluir o TR

    tabela.append(linha); //Inclui uma linha nova
}

function novaLinha(usuario, numPalavras, numCaracteres) {
    //CRIANDO AS TAGS REAIS
    var linhaInicio = $("<tr>")
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras + " Palavras");
    var colunaCaracteres = $("<td>").text(numCaracteres + " Caracteres");
    var colunaRemover = $("<td>");
    var link = $("<button>").addClass("botao-remover");
    var icone = $("<i>").addClass("material-icons icones").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linhaInicio.append(colunaUsuario);
    linhaInicio.append(colunaPalavras);
    linhaInicio.append(colunaCaracteres);
    linhaInicio.append(colunaRemover);

    return linhaInicio;
}

function removeLinha() {
    event.preventDefault; //não há nada padrão de evento, mas se estivessemos utilizando um <a>, seria necessário
    $(this).parent().parent().remove();
}
