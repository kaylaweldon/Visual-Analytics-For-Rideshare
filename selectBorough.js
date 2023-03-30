function onBoroughSelect() {
    const boroughSelect = document.getElementById('borough-select');
    boroughSelect.addEventListener('change', function () {
        map.data.forEach(function (feature) {
            var borough = feature.getProperty('borough');
            var color = borough === boroughSelect.value ? 'blue' : 'green';
            feature.setProperty('fillColor', color);
        });
    });

    function resetMap() {
        map.data.setStyle(function (feature) {
            return {
                fillColor: 'green',
                strokeWeight: 1
            };
        });
    }

}