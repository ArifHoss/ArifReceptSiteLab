function addForratt(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#forrattMedRakor');
const url = 'data/data.json';
fetch(url)
    .then((response) => response.json())

    .then(function (data) {
        console.log(data.forrattMedRakor);
        console.log("Visa första i data-objektet: " + data.forrattMedRakor[0].title);
        let arifSp = data.forrattMedRakor;

        return arifSp.map(function (forratt) {

            let li = addForratt('li');
            li.innerHTML = forratt.title + " " + forratt.Ingredienser;
            append(ul, li);
        })
    })
    .catch(function (error) {
        console.log(error);
    });
