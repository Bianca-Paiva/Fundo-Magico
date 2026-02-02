document.addEventListener("DOMContentLoaded", function() {});

const formulario = document.querySelector(".form-group");
const descricaoInput = document.getElementById("description");
const codigoHtml = document.getElementById("html-code");
const codigoCss = document.getElementById("css-code");
const secaoPreview = document.getElementById("preview-section");

formulario.addEventListener("submit", async function(evento) {
  evento.preventDefault();
  
const descricao = descricaoInput.value.trim();

  if(!descricao){
    return;
  }

  mostrarCarregamento(true);

 
try {
const response = await fetch("https://phillipe-muniizz.app.n8n.cloud/webhook/botão-fundo-magico", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ descricao }),
});

const dados = await response.json();
 
codigoHtml.textContent = dados.html || "";
codigoCss.textContent = dados.css || "";

secaoPreview.style.display = "block";
secaoPreview.innerHTML = dados.html || "";


let tagEstilo = document.getElementById("estilo-dinamico");
if(tagEstilo){
  tagEstilo.remove();
}

if(dados.css){
  tagEstilo = document.createElement("style");
  tagEstilo.textContent = dados.css;
  document.head.appendChild(tagEstilo);
}



}catch(error) {
  console.error("Erro ao gerar o background:", error);
  codigoHtml.textContent = "Não consegui gerar o HTML, tente novamente.";
  codigoCss.textContent = "Não consegui gerar o CSS, tente novamente.";
  secaoPreview.innerHTML = "";
}finally{
  mostrarCarregamento(false);
}



function mostrarCarregamento(estaCarregando) {
  const botaoEnviar = document.getElementById("generate-btn");
  if(estaCarregando){
    botaoEnviar.textContent = "Carregando Background...";
  }else{
    botaoEnviar.textContent = "Gerar Background Mágico";
  }
}


const dados = await response.json();

codigoHtml.textContent = dados.html || "";
codigoCss.textContent = dados.css || "";





});


