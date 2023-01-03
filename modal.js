// VARIABLES

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// EVENT LISTENERS

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
})

