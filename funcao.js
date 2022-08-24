let caixatxt1 = document.getElementById("txtAreaRecebe");
let caixatxt2 = document.getElementById("txtAreaDevolve");

let botaocrip = document.getElementById("bCrip");
let botaodescrip = document.getElementById("bDescrip");
let botaocopiar = document.getElementById("bCopiar");

caixatxt1.addEventListener("keypress", function(e){
        if(!check(e)){
          e.preventDefault();
          alert("Não são validos caracteres especiais ou acentos!")
        }
});

function check (e){
  const char = String.fromCharCode(e.keyCode)

  console.log(e.keyCode)
  console.log(char)

  const pattern = '[a-z]'

  if(char.match(pattern)){
    return true
  }
}

function criptografar() {
    let txtCriptografado = caixatxt1.value;
    
    txtCriptografado = txtCriptografado.replace(/e/g, "enter")
    txtCriptografado = txtCriptografado.replace(/i/g, "imes")
    txtCriptografado = txtCriptografado.replace(/a/g, "ai")
    txtCriptografado = txtCriptografado.replace(/o/g, "ober")
    txtCriptografado = txtCriptografado.replace(/u/g, "ufat")
    let resultado = txtCriptografado
    caixatxt2.innerHTML = resultado
}
function descriptografar() {
    let txtCriptografado = caixatxt1.value;

    txtCriptografado = txtCriptografado.replace(/enter/g, "e")
    txtCriptografado = txtCriptografado.replace(/imes/g, "i")
    txtCriptografado = txtCriptografado.replace(/ai/g, "a")
    txtCriptografado = txtCriptografado.replace(/ober/g, "o")
    txtCriptografado = txtCriptografado.replace(/ufat/g, "u")
    let resultado = txtCriptografado
    caixatxt2.value = resultado;
}
function copiartxt() {
    let conteudo = document.getElementById("txtAreaDevolve")
    conteudo.select()
    document.execCommand("copy")
}