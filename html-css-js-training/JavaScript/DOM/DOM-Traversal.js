// // //Event Handling
// // const close = document.getElementsByClassName('close')[0];
// // const card = document.getElementsByClassName('card')[0];
// // close.addEventListener('click', function(){
// //     // card.remove();
// //     card.style.display = 'none';
// // })

// // STUDI KASUS I = KETIKA X DIPENCET, KONTAKNYA MENJADI HILANH

// const allClose = document.querySelectorAll('.close');

// // for(let i = 0; i < allClose.length; i++){
// //     allClose[i].addEventListener('click', function(e){
// //         // allClose[i].parentElement.style.display= 'none';
// //         e.target.parentElement.style.display= 'none';
// //     })
// // }

// // allClose.forEach(function(el){
// //     el.addEventListener('click', function(e){
// //         e.target.parentElement.style.display= 'none';
// //     })
// // })

// //DOM Traversal Method (parentNode, parentElement, nextSibling, nextElementSibling, previousSibling, previousElementSibling)

// //STUDI KASUS II = MENGHENTIKAN AKSI DEFAULT ELEMENT A PADA HTML
// allClose.forEach(function(el){
//         el.addEventListener('click', function(e){
//             e.target.parentElement.style.display= 'none';
//             e.preventDefault();
//             e.stopPropagation();
//         })
//     })

// //STUDI KASUS III = MENAMBAHKAN EVENT PADA CARD DAN MENGABAIKAN EVENT CARD TERSEBUT KE X
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(){
//         alert('ok');
//     })
// })

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})