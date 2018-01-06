function startModal(evt, modal) {
    let fecha = document.getElementsByClassName("modal");
    for (let i = 0; i < fecha.length; i++) {
        fecha[i].style.display = "none";
    };
    let abre = document.getElementsByClassName(modal);
    for (let i = 0; i < abre.length; i++) {
        abre[i].style.display = "flex";
    };
};

var span = document.getElementsByClassName("close");
for (let i = 0; i < span.length; i++) {
    span[i].onclick = function () {
        let fecha = document.getElementsByClassName("modal");
        for (let i = 0; i < fecha.length; i++) {
            fecha[i].style.display = "none";
        };
    };
};
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.maxHeight){
	  panel.style.maxHeight = null;
	} else {
	  panel.style.maxHeight = panel.scrollHeight + "px";
	} 
  }
}