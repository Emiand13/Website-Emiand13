 
 
 document.addEventListener('DOMContentLoaded', function() {
 
 
let elementoTexto = document.querySelector('.emiand13');

setTimeout(function() {
    elementoTexto.style.animation = 'accion 1s infinite';
    
setTimeout(function() {
  elementoTexto.style.animation = 'none';
}, 2000); // Detener la animación después de 2.4 segundos (2400 milisegundos)
}, 2050); // Esperar 2.3 segundos (2400 milisegundos) antes de iniciar la animación
});