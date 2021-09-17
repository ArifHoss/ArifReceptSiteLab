//Store
localStorage.setItem('email','arif@example.se');

//Get Data
document.querySelector('#kontakt-storage').innerHTML = localStorage.getItem('email');
