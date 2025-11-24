// ----------------------------------------------------
// Função 1: Tornar o formulário dinâmico
// Objetivo: Mostrar/Ocultar o campo de Endereço baseado
//           na escolha de Tele-busca (requisito de dinamismo).
// ----------------------------------------------------

// 1. Espera o documento ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Localiza os elementos HTML que vamos monitorar
    const radioTeleBusca = document.getElementById('teleBusca');
    const radioEntregaLocal = document.getElementById('entregaLocal');
    const campoEndereco = document.getElementById('enderecoCliente'); // Este é o INPUT do endereço
    
    // 3. Localiza a DIV PAI do endereço para ocultar/mostrar (melhor para Bootstrap)
    // Usamos o 'col-12' do endereço no agendamento.html
    const divEnderecoPai = campoEndereco.closest('.col-12'); 

    // 4. Função que define se o campo deve ser mostrado ou ocultado
    function atualizarVisibilidadeEndereco() {
        // Se a opção Tele-busca estiver marcada:
        if (radioTeleBusca.checked) {
            // Mostra o campo (remove a classe de ocultar do Bootstrap)
            divEnderecoPai.style.display = 'block'; 
            campoEndereco.setAttribute('required', 'required'); // Torna o campo obrigatório
        } else {
            // Oculta o campo
            divEnderecoPai.style.display = 'none'; 
            campoEndereco.removeAttribute('required'); // Remove a obrigatoriedade
            campoEndereco.value = ''; // Limpa o valor para não enviar dados desnecessários
        }
    }

    // 5. Adiciona 'ouvintes' (listeners) aos botões de rádio
    radioTeleBusca.addEventListener('change', atualizarVisibilidadeEndereco);
    radioEntregaLocal.addEventListener('change', atualizarVisibilidadeEndereco);

    // 6. Roda a função na inicialização, para garantir que o estado inicial esteja correto
    atualizarVisibilidadeEndereco();
});