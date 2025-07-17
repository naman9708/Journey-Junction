
document.querySelector(".search-btn").addEventListener("click", async () => {
    console.log("hello");

    const place = document.querySelector(".dropdown").value;
 
    const URL = `https://nominatim.openstreetmap.org/search?format=json&q=${place.value}`;

    try {
        let response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        let data = await response.json();
        console.log(data);
        document.querySelector("#output").innerText = "data";
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
