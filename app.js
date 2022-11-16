function moverBoton(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight ) + 'px';
    elm.style.position = 'absolute';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetHeight ) + 'px';
    elm.style.backgroundColor = '#a00215'
    elm.style.borderColor = '#FFF'

} 
let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');

btnNo.addEventListener('mouseenter', function(e) {moverBoton(e.target)});

btnSi.addEventListener('click', function(e){
    alert("ahora vas a tener q estar conmigo toda la vida :D te amito");
    const cancion = new Audio('img\\eres.mp3')
    cancion.play()
})

