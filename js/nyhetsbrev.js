const elNyhetsForm = document.querySelector('#nyhetFormReg');
const replyToCustomar = document.querySelector('#email');
// const elTerms = document.querySelector('#terms');
// const elTermsHint = document.querySelector('#termsHint');
const elEmailOutput = document.querySelector('#emailOutput');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function sendReply(event) {

    let getEmailThenReply = replyToCustomar.value;
    let sendReply = '';

    // sendReply = 'Tack för du valde os! Ditt email: ' + getEmailThenReply + ' är registrerad nu!';

    if (validateEmail(getEmailThenReply)) {
        sendReply = 'Tack för du valde os! Ditt email: ' + getEmailThenReply + ' är registrerad nu!';
    } else {
        sendReply = 'Valje en giltigt email tack!"' + getEmailThenReply + '" är inte en giltigt email.'
    }
    elEmailOutput.textContent = sendReply;
    event.preventDefault();
}


elNyhetsForm.addEventListener('submit', sendReply, false);

