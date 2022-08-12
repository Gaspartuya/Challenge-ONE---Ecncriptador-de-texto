const btnecriptar = document.getElementById("btnencript");
const inputtext = document.getElementById("txtinput");
const showtext = document.getElementById("txtshow");
const btndesencriptar = document.getElementById("btnuncript");
const btncopiar = document.getElementById("btncopiar");
const btnlimpiar = document.getElementById("btnlimpiar");
var mensaje;
var encriptado;
var copiar;

function encriptar(){
    document.getElementById("divshowmuneco").style.display = "none";
    mensaje = inputtext.value;
    encriptado = mensaje.replace(/[eèêëé]/gi,'enter').replace(/[iíìîï]/gi,'imes').replace(/[oóòôõö]/gi,'ober').replace(/[aáàâãä]/gi,'ai').replace(/[uùûüú]/gi,'ufat');
    showtext.value = encriptado;

}

function desencriptar(){
    document.getElementById("divshowmuneco").style.display = "none";
    encriptado = inputtext.value;
    mensaje = encriptado.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    showtext.value = mensaje;

}

function copiartexto(){
    showtext.select();
    copiar = showtext.value;
    navigator.clipboard.writeText(copiar);
}

function limpiar(){
    showtext.value = "";
    inputtext.value = "";
    document.getElementById("divshowmuneco").style.display = "inline";
}

btnecriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick = copiartexto;
