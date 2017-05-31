function menuResponsivo() {
    var x = document.getElementById('menu');
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
var x = document.querySelectorAll('.instrumento_categoria');
let categorias = document.getElementById('span');
if (innerWidth <= 768){
    categorias.onclick = function () {
        for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === 'none') {
                x[i].style.display = 'block';
            } else {
                x[i].style.display = 'none';
            };
        };
    };
};