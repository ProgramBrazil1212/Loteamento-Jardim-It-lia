// Banco de dados oficial do Loteamento Jardim Itália extraído do documento
const bancoLoteamento = {
    "Q15": {
        "1": { area: "505,96", dono: "FAMILIA", valor: "150.000,00", telefone: "" },
        "2": { area: "507,38", dono: "LOTEADORES", valor: "150.000,00", telefone: "" },
        "3": { area: "507,10", dono: "LOTEADORES", valor: "150.000,00", telefone: "" },
        "4": { area: "479,30", dono: "FAMÍLIA", valor: "150.000,00", telefone: "" },
        "5": { area: "391,37", dono: "FAMÍLIA", valor: "160.000,00", telefone: "" },
        "6": { area: "370,79", dono: "LOTEADORES", valor: "170.000,00", telefone: "" },
        "7": { area: "363,90", dono: "LOTEADORES", valor: "170.000,00", telefone: "" },
        "8": { area: "362,14", dono: "FAMÍLIA", valor: "160.000,00", telefone: "" },
        "9": { area: "402,56", dono: "FAMILIA", valor: "150.000,00", telefone: "" },
        "10": { area: "785,75", dono: "FAMÍLIA", valor: "250.000,00", telefone: "" }
    },
    "Q16": {
        "1": { area: "450,90", dono: "FAMILIA", valor: "230.000,00", telefone: "" },
        "2": { area: "362,25", dono: "LOTEADORES", valor: "180.000,00", telefone: "" },
        "3": { area: "362,25", dono: "FAMILIA", valor: "180.000,00", telefone: "" },
        "4": { area: "362,25", dono: "LOTEADORES", valor: "180.000,00", telefone: "" },
        "5": { area: "362,25", dono: "FAMÍLIA", valor: "180.000,00", telefone: "" }
    },
    "Q17": {
        "1": { area: "455,46", dono: "FAMILIA", valor: "250.000,00", telefone: "" },
        "2": { area: "361,93", dono: "LOTEADORES", valor: "210.000,00", telefone: "" },
        "3": { area: "362,25", dono: "FAMÍLIA", valor: "210.000,00", telefone: "" }
    },
    "Q18": {
        "1": { area: "397,26", dono: "LOTEADORES", valor: "180.000,00", telefone: "" },
        "2": { area: "399,25", dono: "FAMILIA", valor: "200.000,00", telefone: "" },
        "3": { area: "483,77", dono: "LOTEADORES", valor: "300.000,00", telefone: "" }
    },
    "Q19": {
        "1": { area: "452,65", dono: "FAMILIA", valor: "220.000,00", telefone: "" },
        "2": { area: "366,06", dono: "LOTEADORES", valor: "180.000,00", telefone: "" },
        "5": { area: "457,17", dono: "LOTEADORES", valor: "220.000,00", telefone: "" }
    }
};

// Função executada quando o usuário clica em um lote na imagem
function mostrarDetalhes(quadraId, loteId) {
    const quadra = bancoLoteamento[quadraId];
    
    if (quadra && quadra[loteId]) {
        const loteDados = quadra[loteId];
        
        // Insere as informações no HTML da janela flutuante
        document.getElementById("lbl-quadra").innerText = quadraId.replace("Q", "Quadra ");
        document.getElementById("lbl-lote").innerText = loteId;
        document.getElementById("lbl-tamanho").innerText = loteDados.area;
        document.getElementById("lbl-valor").innerText = loteDados.valor;
        document.getElementById("lbl-proprietario").innerText = loteDados.dono;
        
        // Se não tiver telefone cadastrado, exibe um aviso amigável
        document.getElementById("lbl-telefone").innerText = loteDados.telefone || "Não cadastrado";

        // Exibe a janela flutuante
        document.getElementById("modalLote").style.display = "block";
    } else {
        alert("Erro: Informações do lote não encontradas no banco de dados.");
    }
}

// Função para fechar a janela flutuante
function fecharModal() {
    document.getElementById("modalLote").style.display = "none";
}

// Fecha o modal se o usuário clicar em qualquer lugar fora da caixinha de dados
window.onclick = function(event) {
    const modal = document.getElementById("modalLote");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
