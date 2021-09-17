const elSearchForm = document.querySelector('#searchForm');
const elFindRecept = document.querySelector('#findRecept');
const elOutput = document.querySelector('#output');

function searchReply(event) {
    let findSearch = elFindRecept.value;
    let sendReply = '';

    sendReply = 'Du fick 0 träffar på "' + findSearch + '"!';
    elOutput.textContent = sendReply;
    event.preventDefault();
}

elSearchForm.addEventListener('submit', searchReply, false);