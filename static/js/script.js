let video;
let canvas;
let nameInput;

function init() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    nameInput = document.getElementById('name');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing webcam:', error);
            alert('No se puede acceder a la cámara web. Asegúrate de dar permiso para acceder a la cámara.');
        });
}

function capture() {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block';
    video.style.display = 'none';
}

function register() {
    const name = nameInput.value;
    const photo = dataURItoBlob(canvas.toDataURL());

    if (!name || !photo) {
        alert('!Se requiere nombre y foto de la cara!');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', photo, `${name}.jpg`);

    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Datos registrados en trestics exitosamente.');
            window.location.href = '/';
        } else {
            alert('No pude guardar tus datos. Itentalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function login() {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photo = dataURItoBlob(canvas.toDataURL());

    if (!photo) {
        alert('Primero toma una foto antes de iniciar sesion.');
        return;
    }

    const formData = new FormData();
    formData.append('photo', photo, 'login.jpg');

    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Add this line to see the actual response received from the server
        if (data.success) {
            alert('Inicio con biometria correcto.');
            window.location.href = '/success?user_name=' + nameInput.value;
        } else {
            alert('Error de inicio de sesion. Intentalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

init();
