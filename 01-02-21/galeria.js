/* Crear una galeria de imágenes que tenga dos botones; uno para la imagen anterior y otro para la siguiente.
El contenedor de la galeria tendrá una clase o un ID para poder identificarlo */

//Individual
let galeria = document.querySelectorAll('.galeria li');
let anterior = document.querySelector('.anterior');
let siguiente = document.querySelector('.siguiente');
//Grupal
let galerias = document.querySelectorAll('.galeria');
let anteriores = document.querySelectorAll('.anterior');
let siguientes = document.querySelectorAll('.siguiente');



const cambiarImagen = (direction) => {
    for(i = 0 ; i < galeria.length ; i++){
        if (galeria[i].classList.contains('active')) {
            galeria[i].classList.remove('active')
            switch(direction) {
                case true: // Si i es menor al índice del último ítem suma 1, si no se cumple vuelve al principio.
                    i < galeria.length - 1 ?
                        nextItem = galeria[i+1] :
                        nextItem = galeria[0]
                    break;
                case false: // Si i es mayor al primer índice resta 1, si no se cumple va al final.
                    i > 0 ?
                        nextItem = galeria[i-1] :
                        nextItem = galeria[galeria.length-1]
                    break;
            }
        }
    }
    nextItem.classList.add('active');
}

anterior.addEventListener('click', () => cambiarImagen(false))
siguiente.addEventListener('click', () => cambiarImagen(true))

anteriores.forEach(anterior => anterior.addEventListener('click', () => cambiarImagen(false)))