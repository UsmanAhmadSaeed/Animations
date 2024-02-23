function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader1").style.display = "none";
    document.getElementById("c1").style.display = "none";
    document.getElementById("page-body").style.display = "block";
  }
window.onload = setTimeout(showPage, 5000);