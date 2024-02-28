
function initMap() {
    var options = {
        zoom: 16,
        center: {lat: 51.0908492, lng: 71.4183229} // Example coordinates
    };

    var map = new google.maps.Map(document.getElementById('map'), options);

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: 'Hello World!'
    });
}
