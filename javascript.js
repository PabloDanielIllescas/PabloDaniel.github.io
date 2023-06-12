// Obtener el elemento del botón
const showImageButton = document.getElementById('boton-foto');

// Obtener el elemento de la sección
const mySection = document.getElementById('foto');

// Crear un elemento de imagen
const imageElement = document.createElement('img');
imageElement.src = 'portada.jpg';

// Agregar la clase "hide" para ocultar inicialmente la imagen
imageElement.classList.add('hide');

// Agregar el elemento de imagen a la sección
mySection.appendChild(imageElement);

// Agregar un evento al botón
showImageButton.addEventListener('click', function() {
  // Cambiar la clase de la imagen para mostrarla
  imageElement.classList.toggle('hide');
});

// FUNCION DE SUMA
function suma() {
    let sumaSection = document.getElementById('suma');
    let numeroUno = parseFloat(document.getElementById('sumandoUno').value);
    let numeroDos = parseFloat(document.getElementById('sumandoDos').value);
    let resultado = numeroUno + numeroDos;
    

    sumaSection.textContent = resultado;
    sumaSection.classList.remove('hidden');
  }
  
  let botonSuma = document.getElementById('boton-suma');
  botonSuma.addEventListener('click', suma);

    // FUNCION DE RESTA
   function resta() {
    let multiSection = document.getElementById('resta');
    let numeroUno = parseFloat(document.getElementById('restandoUno').value);
    let numeroDos = parseFloat(document.getElementById('restandoDos').value);
    let resultado = numeroUno - numeroDos;
   
    multiSection.textContent = resultado;
    multiSection.classList.remove('hidden');
  }

  let botonResta = document.getElementById('boton-resta');
  botonResta.addEventListener('click', resta);

   // FUNCION DE MULTIPLICACIÓN
   function multiplicacion() {
    let multiSection = document.getElementById('multi');
    let numeroUno = parseFloat(document.getElementById('multiUno').value);
    let numeroDos = parseFloat(document.getElementById('multiDos').value);
    let resultado = numeroUno * numeroDos;
  
    multiSection.textContent = resultado;
    multiSection.classList.remove('hidden');
  }
  
  let botonMulti = document.getElementById('boton-multi');
  botonMulti.addEventListener('click', multiplicacion);


     // FUNCION DE DIVISIÓN
     function division() {
        let diviSection = document.getElementById('divi');
        let numeroUno = parseFloat(document.getElementById('divUno').value);
        let numeroDos = parseFloat(document.getElementById('diviDos').value);
        let resultado = numeroUno / numeroDos;
      
        diviSection.textContent = resultado;
        diviSection.classList.remove('hidden');
      }
      
      let botonDivi = document.getElementById('boton-divi');
      botonDivi.addEventListener('click', division);