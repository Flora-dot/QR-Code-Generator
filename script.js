const generateBtn = document.getElementById('generate-btn');
const imageHolder = document.getElementById('qr-image');
const qrText = document.querySelector('input');
const qrCodeHolder =  document.getElementById('qr-code')

const downloadBtn = document.getElementById('download-btn')



// function to generate Qr code

function generateQrCode() {
   if(qrText.value != '') {
     imageHolder.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    qrCodeHolder.style.display = 'flex'
   } else {
    alert ('Kindly enter text or url')  // Runs when the input field is empty
   }
}
generateBtn.addEventListener('click', generateQrCode)


// function for qr code image download

function downloadQrCode() {
    let link = document.createElement('a');
    link.download = 'qrcode.png'
    link.href = imageHolder.src;
    document.body.appendChild(link);
    // link.click();
    setTimeout(() => link.click(), 100);
    document.body.removeChild(link);
}

downloadBtn.addEventListener('click', downloadQrCode)