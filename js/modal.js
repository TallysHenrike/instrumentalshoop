function startModal(evt, modal) {
    let fecha = document.getElementsByClassName("modal");
    for (i = 0; i < fecha.length; i++) {
        fecha[i].style.display = "none";
    };
    let abre = document.getElementsByClassName(modal);
    for (i = 0; i < abre.length; i++) {
        abre[i].style.display = "flex";
    };
};

var span = document.getElementsByClassName("close");
for (var i = 0; i < span.length; i++) {
    span[i].onclick = function () {
        let fecha = document.getElementsByClassName("modal");
        for (var i = 0; i < fecha.length; i++) {
            fecha[i].style.display = "none";
        };
    };
};