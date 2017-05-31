function todos() {
    var x = document.querySelectorAll(".produto");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    };
};
function produto(evt, item) {
    // Declare all variables
    var i, tabcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("produto");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };

    var x = document.getElementsByClassName(item);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    };
};