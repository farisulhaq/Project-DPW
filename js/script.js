var modal = document.getElementById("modalForm");
var btn = document.getElementById("buatCV");
var close_modal = document.getElementsByClassName("closeMdal")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}