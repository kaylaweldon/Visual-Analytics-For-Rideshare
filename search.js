function searchZone() {
  var input = document.getElementById("zone-search");
  var filter = input.value.toUpperCase();
  var dropdown = document.getElementById("dropdown");
  var dropdownList = document.getElementById("dropdownlist");
  
  	  var testArr = ["1", "2", "3", "4"];
  	  for (let i = 0; i < testArr.length; i++) {
		const li = document.createElement('li');
        li.textContent = testArr[i];
        dropdownList.appendChild(li);
	  }
  
  // Create a new XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  /*
  // Define the function to be called when the request completes
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Parse the text file content into an array of strings
      var zones = this.responseText.split("\n");
	
	// Search for matching results in the array of strings
      var results = "";
      for (var i = 0; i < zones.length; i++) {
        if (zones[i].toUpperCase().indexOf(filter) > -1) {
          results += "<a href='#'>" + testArr[i] + "</a>";
        }
      }

      // Update the dropdown with the matching results
      dropdown.innerHTML = results;

      // Show the dropdown
      dropdown.style.display = "block";
    }
  };

  // Open the XMLHttpRequest object and specify the URL of the text file
  xhttp.open("GET", "C:\Users\kayla\Desktop\zones.txt", true);

  // Send the XMLHttpRequest object
  xhttp.send();
  */
}
