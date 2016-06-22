function showDetails(name) {
    var small = document.getElementById(name);
    small.style.display = "none";
    
    var large = document.getElementById(name+"-details");
    large.style.display = "";
}

function hideDetails(name) {
    var small = document.getElementById(name);
    small.style.display = "";
    
    var large = document.getElementById(name+"-details");
    large.style.display = "none";
}

function highlightSpeaker(name) {
  var small = document.getElementById(name);
  var details = small.childNodes[3].childNodes[1];
  details.style.textDecoration = "underline";
}

function removeHighlight(name) {
  var small = document.getElementById(name);
  var details = small.childNodes[3].childNodes[1];
  details.style.textDecoration = "";
}
