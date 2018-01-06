function menuResponsivo() {
    var x = document.getElementById('menu');
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

if (innerWidth <= 768){
    function categorias() {
        var x = document.querySelectorAll('.instrumento_categoria');
        for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === 'block') {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'block';
            };
        };
    };
};