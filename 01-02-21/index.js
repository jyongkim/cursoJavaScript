let tareaInput = document.querySelector('input');
let tareaButton = document.querySelector('button');
let tareaList = document.querySelector('ul');

tareaButton.onclick = () => {
    tareaList.innerHTML += `
        <li>${tareaInput.value}</li>
    `
};