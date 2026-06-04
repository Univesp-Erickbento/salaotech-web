const btn = document.getElementById("toggleTheme") as HTMLButtonElement;

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Data atual
function mostrarData(): void {
    const hoje = new Date();

    const data = hoje.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const el = document.getElementById("dataAtual");

    if (el) {
        el.innerText = `Hoje é ${data}`;
    }
}

mostrarData();