const backToTopButton = document.getElementById('backToTopButton');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
function moverCuadro() {
    var cuadro = document.getElementById("cuadro");
    var pos = 0;
    var id = setInterval(frame, 10); 

    function frame() {
        if (pos >= 300) { 
            clearInterval(id);
        } else {
            pos++;
            cuadro.style.left = pos + "px"; 
        }
    }
}


window.onload = moverCuadro;