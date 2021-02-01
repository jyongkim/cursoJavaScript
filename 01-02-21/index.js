let tareaInput = document.querySelector('input');
let tareaButton = document.querySelector('button');
let tareaList = document.querySelector('ul');

tareaButton.onclick = () => {
    let tareaItem = document.createElement('li');
    tareaItem.innerHTML = tareaInput.value;
    tareaList.appendChild(tareaItem);
};