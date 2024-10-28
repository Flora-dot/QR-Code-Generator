const generateBtn = document.getElementById('generate-btn');
const imageHolder = document.getElementById('qr-image');
const qrText = document.querySelector('input');
const qrCodeHolder =  document.getElementById('qr-code')



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