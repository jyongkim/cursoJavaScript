let tareaInput = document.querySelector('input');
let tareaButton = document.querySelector('button');
let tareaList = document.querySelector('ul');

tareaButton.onclick = () => {
    tareaInput.value != '' ?
        buscarDuplicados(tareaInput.value) : null
        tareaEnded()
        deleteItem()
};

const tareaEnded = () => {
    let tareaChecked = tareaList.querySelectorAll('input[type="checkbox"]')
    let tareaItems = tareaList.querySelectorAll('li');
    tareaItems.forEach(
        (item, i) => item.addEventListener('click', () => {
            tareaChecked[i].checked ?
                item.style.textDecoration = 'line-through' :
                item.style.textDecoration =
                'none'
        })
    )
}

const buscarDuplicados = (text) => {
    let duplicateFound
    let tareaItems = tareaList.querySelectorAll('label');
    for (i = 0 ; i < tareaItems.length; i++) {
        if (tareaItems[i].innerHTML == text) {
            alert('Ya existe la tarea.')
            duplicateFound = true
        }
    }
    duplicateFound ? null : agregarItem()
};

const agregarItem = () => {
    let tareaItems = tareaList.querySelectorAll('li');
    let item = tareaItems.length + 1;
    tareaList.innerHTML += `
        <li>
            <input type="checkbox" id="item-${item}">
            <label for="item-${item}">${tareaInput.value}</label>
            <button class="delete">
                &times;
            </button>
        </li>`
};

const deleteItem = () => {
    let delItems = tareaList.querySelectorAll('.delete')
    let tareaItems = tareaList.querySelectorAll('li')
    delItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            tareaItems[i].remove()
        })
    })
}

/* Validación de formularios*/
const nombre1 = document.querySelector('#nombre-01')
const nombre2 = document.querySelector('#nombre-02')
const form = document.querySelector('.formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault() // Prevenimos la recarga de la página.
    nombre1.value == nombre2.value ? alert('Los nombres coinciden.') : alert('Los nombres no coinciden.')
})

/***********************************************************************************/