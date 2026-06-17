const dados = {
  1: { area: "360 m²", valor: "R$ 150.000", prop: "Disponível", tel: "-" },
  2: { area: "360 m²", valor: "R$ 150.000", prop: "Disponível", tel: "-" },
  3: { area: "360 m²", valor: "R$ 160.000", prop: "Vendido", tel: "99999-9999" },
  4: { area: "360 m²", valor: "R$ 150.000", prop: "Disponível", tel: "-" },
  5: { area: "360 m²", valor: "R$ 140.000", prop: "Reservado", tel: "-" },
  6: { area: "360 m²", valor: "R$ 150.000", prop: "Disponível", tel: "-" },
};

function abrirLote(id) {
  const lote = dados[id];

  document.getElementById("lote-num").innerText = id;
  document.getElementById("area").innerText = lote.area;
  document.getElementById("valor").innerText = lote.valor;
  document.getElementById("prop").innerText = lote.prop;
  document.getElementById("tel").innerText = lote.tel;

  document.getElementById("popup").classList.remove("hidden");
}

function fecharPopup() {
  document.getElementById("popup").classList.add("hidden");
}
