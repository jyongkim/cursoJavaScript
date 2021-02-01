var myLink = document.createElement('a');
var pageBody = document.querySelector('body');

document.write('Jonathan Kim');
pageBody.appendChild(myLink);

/* innerHTML: edita el contenido de un elemento.*/
myLink.innerHTML = ' Soy un link';

/* setAttribute('attr', 'valor'): asigna o modifica los atributos y valores de un elemento. */
myLink.setAttribute('href', '#otra_pagina')

/* Object.assign(el, 'value'): permite asignar múltiples atributos/valores a un elemento.
                                para aplicarlo de esta manera debemos insertar un objeto como valor. */
Object.assign(myLink, {
    href:'#otra_seccion',
    target:'_self',
    title:'Soy un link'
})

pageBody.innerHTML += '<a href="#"> Soy un nuevo link </a>'