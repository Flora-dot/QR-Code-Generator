const generateBtn = document.getElementById('generate-btn');
const imageHolder = document.getElementById('qr-image');
const qrText = document.querySelector('input');
const qrCodeHolder =  document.getElementById('qr-code')



// function to generate Qr code

function generateQrCode() {
    imageHolder.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    qrCodeHolder.style.display = 'block'
}

generateBtn.addEventListener('click', generateQrCode)