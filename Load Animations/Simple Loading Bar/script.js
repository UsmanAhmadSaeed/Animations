function showPage() {
    document.getElementById("loadingBar").style.display = "none";
    document.getElementById("insideBar").style.display = "none";
    document.getElementById("body").style.display = "block";
}
window.onload = setTimeout(showPage, 5000);