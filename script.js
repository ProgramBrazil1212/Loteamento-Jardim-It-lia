// Banco de dados completo baseado no documento oficial do Jardim Itália
const bancoLoteamento = {
    "Q15": [
        { lote: "1", area: "505,96", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "507,38", dono: "LOTEADORES", tel: "" },
        { lote: "3", area: "507,10", dono: "LOTEADORES", tel: "" },
        { lote: "4", area: "479,30", dono: "FAMÍLIA", tel: "" },
        { lote: "5", area: "391,37", dono: "FAMÍLIA", tel: "" },
        { lote: "6", area: "370,79", dono: "LOTEADORES", tel: "" },
        { lote: "7", area: "363,90", dono: "LOTEADORES", tel: "" },
        { lote: "8", area: "362,14", dono: "FAMÍLIA", tel: "" },
        { lote: "9", area: "402,56", dono: "FAMÍLIA", tel: "" },
        { lote: "10", area: "785,75", dono: "FAMÍLIA", tel: "" }
    ], // 
    "Q16": [
        { lote: "1", area: "450,90", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "362,25", dono: "LOTEADORES", tel: "" },
        { lote: "3", area: "362,25", dono: "FAMÍLIA", tel: "" },
        { lote: "4", area: "362,25", dono: "LOTEADORES", tel: "" },
        { lote: "5", area: "362,25", dono: "FAMÍLIA", tel: "" }
    ], // [cite: 406]
    "Q17": [
        { lote: "1", area: "455,46", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "361,93", dono: "LOTEADORES", tel: "" },
        { lote: "3", area: "362,25", dono: "FAMÍLIA", tel: "" }
    ], // [cite: 408]
    "Q18": [
        { lote: "1", area: "397,26", dono: "LOTEADORES", tel: "" },
        { lote: "2", area: "399,25", dono: "FAMÍLIA", tel: "" },
        { lote: "3", area: "483,77", dono: "LOTEADORES", tel: "" }
    ], // [cite: 409]
    "Q19": [
        { lote: "1", area: "452,65", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "366,06", dono: "LOTEADORES", tel: "" },
        { lote: "5", area: "457,17", dono: "LOTEADORES", tel: "" }
    ], // [cite: 411]
    "Q20": [
        { lote: "1", area: "451,46", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "360,00", dono: "LOTEADORES", tel: "" },
        { lote: "3", area: "360,00", dono: "LOTEADORES", tel: "" }
    ], // [cite: 412]
    "Q21": [
        { lote: "1", area: "450,37", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "360,55", dono: "LOTEADORES", tel: "" },
        { lote: "3", area: "451,28", dono: "LOTEADORES", tel: "" }
    ], // [cite: 413]
    "Q22": [
        { lote: "1", area: "462,00", dono: "LOTEADORES", tel: "" },
        { lote: "2", area: "360,00", dono: "FAMÍLIA", tel: "" },
        { lote: "3", area: "360,00", dono: "LOTEADORES", tel: "" }
    ], // [cite: 414]
    "Q23": [
        { lote: "1", area: "450,36", dono: "LOTEADORES", tel: "" },
        { lote: "2", area: "360,00", dono: "FAMÍLIA", tel: "" }
    ], // [cite: 416]
    "Q24": [
        { lote: "1", area: "462,59", dono: "FAMÍLIA", tel: "" },
        { lote: "2", area: "364,00", dono: "LOTEADORES", tel: "" }
    ], // [cite: 418]
    "Q25": [
        { lote: "1", area: "1536,04", dono: "LOTEADORES", tel: "" },
        { lote: "4", area: "366,26", dono: "FAMÍLIA", tel: "" }
    ], // [cite: 419]
    "Q26": [
        { lote: "1", area: "360,01", dono: "FAMÍLIA", tel: "" },
        { lote: "3", area: "360,39", dono: "LOTEADORES", tel: "" }
    ], // [cite: 421]
    "Q27": [
        { lote: "1", area: "369,75", dono: "FAMÍLIA", tel: "" },
        { lote: "4", area: "369,75", dono: "LOTEADORES", tel: "" }
    ], // [cite: 420]
    "Q28": [
        { lote: "1", area: "538,55", dono: "FAMÍLIA", tel: "" },
        { lote: "3", area: "445,99", dono: "EDU", tel: "" },
        { lote: "7", area: "366,17", dono: "RENATO", tel: "" }
    ] // [cite: 422]
};

function abrirPainelQuadra(quadraId) {
    const lotes = bancoLoteamento[quadraId];
    const corpoTabela = document.getElementById("lista-lotes-corpo");
    
    document.getElementById("modal-titulo-quadra").innerText = "📋 Lotes da " + quadraId.replace("Q", "Quadra ");
    corpoTabela.innerHTML = ""; // Limpa a tabela anterior

    if (lotes) {
        lotes.forEach(l => {
            let linha = `<tr>
                <td><strong>Lote ${l.lote}</strong></td>
                <td>${l.area} m²</td>
                <td><span class="badge-${l.dono.toLowerCase().replace('í','i')}">${l.dono}</span></td>
                <td><input type="text" class="input-tel" value="${l.tel}" placeholder="Adicionar telefone..." onchange="atualizarTelefone('${quadraId}', '${l.lote}', this.value)"></td>
            </tr>`;
            corpoTabela.innerHTML += linha;
        });
        document.getElementById("modalLote").style.display = "block";
    }
}

function atualizarTelefone(quadra, lote, novoValor) {
    const lista = bancoLoteamento[quadra];
    const item = lista.find(l => l.lote === lote);
    if(item) {
        item.tel = novoValor;
        console.log(`Telefone do Lote ${lote} da ${quadra} atualizado para: ${novoValor}`);
        // Dica: Aqui no futuro você pode salvar isso numa API ou banco real.
    }
}

function fecharModal() {
    document.getElementById("modalLote").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalLote");
    if (event.target == modal) { modal.style.display = "none"; }
}
