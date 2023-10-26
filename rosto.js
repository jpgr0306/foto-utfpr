// Obtém a URL completa da página
var urlCompleta = window.location.href;

// Função para obter o valor de um parâmetro da URL
function obterParametroDaURL(nomeParametro) {
    var parametros = new URLSearchParams(window.location.search);
    return parametros.get(nomeParametro);
}

// Obtém o valor do parâmetro 'ra'
var raValor = obterParametroDaURL('ra');

if (raValor) {
    // Remove o último dígito do valor de 'ra'
    raValor = raValor.slice(0, -1);

    // Obtém a data e hora atual no formato yyyymmddhhmm
    var dataHora = new Date();
    var ano = dataHora.getFullYear();
    var mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
    var dia = dataHora.getDate().toString().padStart(2, '0');
    var hora = dataHora.getHours().toString().padStart(2, '0');
    var minuto = dataHora.getMinutes().toString().padStart(2, '0');
    var dataHoraFormatada = ano + mes + dia + hora + minuto;

    // Cria a nova URL
    var novaUrl = "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpFoto.pcImagem?p_pesscodnr=" + raValor + "&p_aut=" + dataHoraFormatada;

    // Redireciona para a nova URL
    window.location.href = novaUrl;
} else {
    // Se o parâmetro 'ra' não for encontrado na URL, faça algo aqui, como exibir uma mensagem de erro.
    console.log("Parâmetro 'ra' não encontrado na URL.");
}
