// Obtém a URL completa da página
var urlCompleta = window.location.href;

// Obtém a data e hora atual no formato yyyymmhhddmm
var dataHora = new Date();
var ano = dataHora.getFullYear();
var mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
var dia = dataHora.getDate().toString().padStart(2, '0');
var hora = dataHora.getHours().toString().padStart(2, '0');
var minuto = dataHora.getMinutes().toString().padStart(2, '0');
var dataHoraFormatada = ano + mes + dia + hora + minuto;

var parametros = new URLSearchParams(urlCompleta);
var raValor = parametros.get('ra');

// Cria a nova URL
var novaUrl = "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpFoto.pcImagem?p_pesscodnr=" + raValor + "&p_aut=" + dataHoraFormatada;

// Redireciona para a nova URL
window.location.href = novaUrl;
