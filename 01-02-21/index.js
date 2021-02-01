let tareaInput = document.querySelector('input');
let tareaButton = document.querySelector('button');
let tareaList = document.querySelector('ul');

tareaButton.onclick = () => {
    tareaInput.value != '' ? tareaList.innerHTML += `<li>${tareaInput.value}</li>` : null
    tareaEnded();
};

const tareaEnded = () => {
    let tareaItems = tareaList.querySelectorAll('li');
    tareaItems.forEach(
        item => item.addEventListener('click', () => {
            item.style.textDecoration = 'line-through'
        })
    )
}