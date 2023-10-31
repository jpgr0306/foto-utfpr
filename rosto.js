function redirecionarAteNaoExpirar() {
    var raValor = obterParametroDaURL('ra');
    
    if (raValor) {
        raValor = raValor.slice(0, -1);

        function redirecionar() {
            var dataHora = new Date();
            var ano = dataHora.getFullYear();
            var mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
            var dia = dataHora.getDate().toString().padStart(2, '0');
            var hora = dataHora.getHours().toString().padStart(2, '0');
            var minuto = dataHora.getMinutes().toString().padStart(2, '0');
            var dataHoraFormatada = ano + mes + dia + hora + minuto;
            
            var novaUrl = "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpFoto.pcImagem?p_pesscodnr=" + raValor + "&p_aut=" + dataHoraFormatada;
            window.location.href = novaUrl;
        }
        
        var intervalo = setInterval(function () {
            fetch("URL_DE_VERIFICACAO_AQUI")
                .then(function (response) {
                    return response.text();
                })
                .then(function (text) {
                    if (text.trim() !== "A url expirou.") {
                        clearInterval(intervalo);
                        redirecionar();
                    }
                })
                .catch(function (error) {
                    console.log("Erro na verificação: " + error);
                });
        }, 1000); // Verifique a cada segundo (você pode ajustar o intervalo conforme necessário)
    } else {
        console.log("Parâmetro 'ra' não encontrado na URL.");
    }
}

redirecionarAteNaoExpirar();
