let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060 },
    });

    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    map.data.loadGeoJson('https://raw.githubusercontent.com/billiegiansante/kmlFiles/master/map.geojson');

    map.data.setStyle(function (feature) {
        var objectid = feature.getProperty('objectid');
        var color = "green";
        if (objectid == "2") {
            color = "red";
        }
        return {
            fillColor: color,
            strokeWeight: 1
        }
    });

    //thicker outline & display zone/borough when you hover over a zone
    map.data.addListener('mouseover', function (event) {
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, { strokeWeight: 3 });

        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'block';

        infoBox.innerHTML = 'Zone: ' + event.feature.getProperty('zone') + '<br/>' +
            'Borough: ' + event.feature.getProperty('borough');

        map.addListener('mousemove', function (event) {
            infoBox.style.left = event.pixel.x + 'px';
            infoBox.style.top = event.pixel.y + 'px';
        });
    });

    map.data.addListener('mouseout', function (event) {
        map.data.revertStyle();

        var infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none';
    });

}
window.initMap = initMap;
