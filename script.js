

//produtos

function comprarProduto(nomeProduto, preco) {
    const telefone = "61996904298"; // Seu número com DDD
    const mensagem = `Olá Deivid! Tenho interesse no produto: ${nomeProduto} (R$ ${preco}). Ainda está disponível?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}

//serviços

function solicitarServico(nomeServico) {
    const telefone = "61996904298"; // Coloque seu número aqui
    const mensagem = `Olá Deivid! Gostaria de solicitar um orçamento para o serviço de: ${nomeServico}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}