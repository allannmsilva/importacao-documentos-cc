let box = document.getElementById('box');
let inputUpload = document.getElementById('upload');
let drag = document.getElementById('drag');
let selectFile = document.getElementById('select-file');
let importFileTitle = document.getElementById('import-file');
let confirmButton = document.getElementById('confirm');
let table = document.getElementById('table');
let generateReportButton = document.getElementById('report');
let backButton = document.getElementById('back');

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

box.addEventListener('dragover', (event) => {
    event.preventDefault();
    drag.textContent = 'Solte o arquivo aqui';
});

box.addEventListener('dragleave', (event) => {
    event.preventDefault();
    if (inputUpload.files.length === 0) {
        drag.textContent = 'Arraste e solte um arquivo aqui';
    } else {
        drag.textContent = 'Arquivo selecionado: ' + inputUpload.files[0].name;
    }
});

inputUpload.addEventListener('change', function () {
    boxStyleHandler();
});

function boxDropHandler(ev) {
    ev.preventDefault();
    let fileName = ev.dataTransfer.files[0].name;
    let fileExtension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
    if (fileExtension === 'xls' || fileExtension === 'xlsx' || fileExtension === 'csv') {
        inputUpload.files = ev.dataTransfer.files;
    }
    boxStyleHandler();
}

function boxStyleHandler() {
    if (inputUpload.files.length === 0) {
        importFileTitle.textContent = 'Importe um arquivo Excel (.xls, .xlsx, .csv) aqui';
        drag.textContent = 'Arraste e solte um arquivo aqui';
        selectFile.textContent = 'Ou selecione um arquivo';
        box.classList.replace('text-bg-success', 'text-bg-secondary');
        confirmButton.classList.add('d-none');
        return;
    }

    importFileTitle.textContent = 'Arquivo importado com sucesso!';
    drag.textContent = 'Arquivo selecionado: ' + inputUpload.files[0].name;
    selectFile.textContent = 'Escolher outro arquivo';
    box.classList.replace('text-bg-secondary', 'text-bg-success');
    confirmButton.classList.remove('d-none');
}

confirmButton.addEventListener('click', function () {
    box.classList.add('d-none');
    importFileTitle.hidden = true;
    table.classList.remove('d-none');
    generateReportButton.classList.remove('d-none');
    this.classList.add('d-none');
});

backButton.addEventListener('click', function () {
    box.classList.remove('d-none');
    importFileTitle.hidden = false;
    table.classList.add('d-none');
    generateReportButton.classList.add('d-none');
    confirmButton.classList.remove('d-none');
});