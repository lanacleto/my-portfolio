const img = document.querySelector('.img-about')

window.addEventListener('scroll', function(e){
    var value = window.scrollY

    img.style.top = value * 0.5 + 'px'

})