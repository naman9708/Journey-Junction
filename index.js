
       
       function initMap() {
            const center = { lat: 20.5937, lng: 78.9629 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: center,
            });
        }
    <script src="://maps.googleapis.com/maps/api/js?key=AIzaSyAjIZYoTQCgiZC7fmkNK0N85MV8Zwm1OcI&callback=initMap" async defer></script>
    // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjIZYoTQCgiZC7fmkNK0N85MV8Zwm1OcI&callback=initMap" async defer></script>
    // // Initialize and add the map
    // function initMap() {
    //     // The location you want to center the map on (e.g., India)
    //     const centerLocation = { lat: 20.5937, lng: 78.9629 };

    //     // Create a new map centered on the specified location
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 5, // Adjust the zoom level as needed
    //         center: centerLocation,
    //     });

    //     // Add a marker at the center location
    //     const marker = new google.maps.Marker({
    //         position: centerLocation,
    //         map: map,
    //         title: "Welcome to India",
    //     });
    // }