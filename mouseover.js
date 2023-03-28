function addZoneNameListener() {
    map.data.addListener('mouseover', function(event) {
      var name = event.feature.getProperty('name');
      var zoneName = document.getElementById('zone-name');
      zoneName.textContent = name;
      zoneName.style.display = 'block';
      zoneName.style.left = (event.clientX + 10) + 'px';
      zoneName.style.top = (event.clientY + 10) + 'px';
    });
  
    map.data.addListener('mouseout', function(event) {
      var zoneName = document.getElementById('zone-name');
      zoneName.style.display = 'none';
    });
  }
  