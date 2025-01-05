// your code here
// your code here
function updateURL() {
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            let url = "https://localhost:8080/";

            const params = new URLSearchParams();
            if (name) params.append("name", name);
            if (year) params.append("year", year);

            const urlElement = document.getElementById('url');
            urlElement.textContent = url + (params.toString() ? `?${params.toString()}` : "");

            return false;
}
