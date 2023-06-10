function search() {
            var searchTerm = document.getElementById("searchTerm").value;
            var url = "https://litegapps.site/?search=" + encodeURIComponent(searchTerm);
            window.location.href = url;
        }
	
        