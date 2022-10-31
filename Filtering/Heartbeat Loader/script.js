function showPage() {
			document.getElementById("center").style.display = "none";
			document.getElementById("page-body").style.display = "block";
		}
		window.onload = setTimeout(showPage, 5000);
