"use strict";
// ===============================
// TOGGLE TEMA (Dark/Light)
// ===============================
const btnTema = document.getElementById("toggleTheme");
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// ===============================
// DATA ATUAL AUTOMÁTICA
// ===============================
function mostrarData() {
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const elemento = document.getElementById("dataAtual");
    if (elemento) {
        elemento.innerText = `Hoje é ${dataFormatada}`;
    }
}
mostrarData();
// ===============================
// MODAL - SALVAR AGENDAMENTO
// ===============================
const btnSalvar = document.getElementById("salvarAgendamento");
btnSalvar.addEventListener("click", () => {
    const nome = document.getElementById("nomeCliente").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("dataAgendamento").value;
    // validação simples
    if (!nome || !data) {
        alert("Preencha todos os campos!");
        return;
    }
    alert(`✅ Agendamento realizado!\n\nCliente: ${nome}\nServiço: ${servico}\nData: ${data}`);
    // limpar campos
    document.getElementById("nomeCliente").value = "";
    document.getElementById("dataAgendamento").value = "";
    // fechar modal Bootstrap
    const modalEl = document.getElementById("modalAgendamento");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal === null || modal === void 0 ? void 0 : modal.hide();
});
