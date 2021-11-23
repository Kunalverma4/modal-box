const overlay = document.querySelector('.modal-overlay');
const openbtn = document.querySelector('.modal-btn');
const closebtn = document.querySelector('.close-btn')
openbtn.addEventListener('click',function(){
    overlay.classList.toggle('open-modal');
})
closebtn.addEventListener('click',function(){
    overlay.classList.toggle('open-modal');  
})