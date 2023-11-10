let box = document.getElementById('box');
let inputUpload = document.getElementById('upload');
let drag = document.getElementById('drag');

box.addEventListener('click', function () {
    inputUpload.click();
});

box.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer';
    this.classList.add('bg-gradient');
});

box.addEventListener('mouseout', function () {
    this.classList.remove('bg-gradient');
});

box.addEventListener("dragover", (event) => {
    event.preventDefault();
    drag.textContent = "Solte o arquivo aqui";
});

box.addEventListener("dragleave", () => {
    if (inputUpload.files.length === 0) {
        drag.textContent = "Arraste e solte um arquivo aqui";
    } else {
        drag.textContent = "Arquivo selecionado: " + inputUpload.files[0].name;
    }
});