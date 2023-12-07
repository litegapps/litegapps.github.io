function search() {
            var searchTerm = document.getElementById("searchTerm").value;
            var url = "https://www.google.com/search?q=site:litegapps.github.io+" + encodeURIComponent(searchTerm);
            window.location.href = url;
        }
        