
let offset = document.getElementById('desplazar');
let string = document.getElementById('mensaje');
let descifrado = document.getElementById('resultado');
let resultado = "";
let botonCifrar = document.getElementById('cifrador');
let botonDecifrar = document.getElementById('decifrador');

botonCifrar.addEventListener('click', function(e){
    e.preventDefault();
    debugger
    descifrado.innerHTML = window.cipher.encode(offset.value,string.value);
});
botonDecifrar.addEventListener('click', function(e){
    e.preventDefault();
    descifrado.value = window.cipher.decode(offset.value,string.value);
});