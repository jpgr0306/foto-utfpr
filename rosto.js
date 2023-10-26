// Obtém a URL completa da página
var urlCompleta = window.location.href;

// Divide a URL em partes usando '/' como separador
var partesDaUrl = urlCompleta.split('/');

// Obtém o segundo elemento do path (índice 1)
var segundoElementoDoPath = partesDaUrl[1];

// Obtém a data e hora atual no formato yyyymmhhddmm
var dataHora = new Date();
var ano = dataHora.getFullYear();
var mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
var dia = dataHora.getDate().toString().padStart(2, '0');
var hora = dataHora.getHours().toString().padStart(2, '0');
var minuto = dataHora.getMinutes().toString().padStart(2, '0');
var dataHoraFormatada = ano + mes + dia + hora + minuto;

// Cria a nova URL
var novaUrl = "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpFoto.pcImagem?p_pesscodnr=" + segundoElementoDoPath + "&p_aut=" + dataHoraFormatada;

// Redireciona para a nova URL
window.location.href = novaUrl;