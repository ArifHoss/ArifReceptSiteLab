const elMedlandeFormReg = document.querySelector('#medlandeFormReg');
const elGetName = document.querySelector('#getNamn');
const elOutput = document.querySelector('#sendMessageResponse');

function sendResponse(event){
    let getName=elGetName.value;
    let sendReply = '';
    let hourNow = new Date();
    let time = hourNow.getHours();
    let greetings;

    if (time > 0 && time < 12) {
        greetings = 'Godmorgon!';
    } else if (time > 11 && time < 17) {
        greetings = 'God förmiddag!';
    }else if(time >16 && time<20){
        greetings = 'God middag!';
    } else {
        greetings = 'Välkommen!';
    }

    sendReply = greetings+' Tack "'+getName+'" för din tid och uppmärksamhet!';

    elOutput.textContent = sendReply;
    event.preventDefault();
    console.log(sendReply);
}
elMedlandeFormReg.addEventListener('submit', sendResponse, false);