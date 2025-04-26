function buscar(){
    const campo = document.getElementById("campoBuscar");
    const result = document.getElementById("resultadoBusca");

    const typedText = campo.value.trim();

    if(typedText){
        result.textContent = `Você buscou por '${typedText}'`;
    } else{
        result.textContent = "Por favor, digite algo para buscar."
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const lupa = document.querySelector('img[src="assets/search.svg"]');
    if (lupa) {
      lupa.style.cursor = "pointer";
      lupa.addEventListener("click", buscar);
    }
  });
  document.getElementById("campoBuscar").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      buscar();
    }
  });