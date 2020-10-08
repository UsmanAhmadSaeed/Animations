function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page-body").style.display = "block";
  }
window.onload = setTimeout(showPage, 3000);