declare var bootstrap: any;

// ===============================
// TOGGLE TEMA (Dark/Light)
// ===============================
const btnTema = document.getElementById("toggleTheme") as HTMLButtonElement;

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// ===============================
// DATA ATUAL AUTOMÁTICA
// ===============================
function mostrarData(): void {
    const hoje: Date = new Date();

    const dataFormatada: string = hoje.toLocaleDateString("pt-BR", {
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
const btnSalvar = document.getElementById("salvarAgendamento") as HTMLButtonElement;

btnSalvar.addEventListener("click", () => {

    const nome = (document.getElementById("nomeCliente") as HTMLInputElement).value;
    const servico = (document.getElementById("servico") as HTMLSelectElement).value;
    const data = (document.getElementById("dataAgendamento") as HTMLInputElement).value;

    // validação simples
    if (!nome || !data) {
        alert("Preencha todos os campos!");
        return;
    }

    alert(
        `✅ Agendamento realizado!\n\nCliente: ${nome}\nServiço: ${servico}\nData: ${data}`
    );

    // limpar campos
    (document.getElementById("nomeCliente") as HTMLInputElement).value = "";
    (document.getElementById("dataAgendamento") as HTMLInputElement).value = "";

    // fechar modal Bootstrap
    const modalEl = document.getElementById("modalAgendamento");
    const modal = bootstrap.Modal.getInstance(modalEl!);
    modal?.hide();
});