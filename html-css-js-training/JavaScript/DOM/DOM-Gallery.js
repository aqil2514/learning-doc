const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    //Cek yang diklik
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        jumbo.classList.remove('active');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500)
    }

    thumbs.forEach(function(thumb){
        thumb.className = 'thumb';
    })

    e.target.classList.add('active');
})