function startProgram () {
  console.log("tekst");
}

function initMap() {
  var bergen = {lat:60.391, lng:5.322}
  var ulriken = {lat:60.378, lng:5.387}
  var fløyfjellet = {lat:60.399, lng:5.345}
  var rundemanen = {lat:60.414, lng:5.364}
  var sandviksfjellet = {lat:60.410, lng:5.340}
  var løvstakken = {lat:60.374, lng:5.323}
  var damsgårdsfjellet = {lat:60.375, lng:5.291}
  var lyderhorn = {lat:60.374, lng:5.241}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center : bergen,
    map: map
  });
  var marker = new google.maps.Marker({
    position: ulriken,
    map: map
  })
  var marker = new google.maps.Marker({
    position: fløyfjellet,
    map: map
  })
  var marker = new google.maps.Marker({
    position: rundemanen,
    map: map
  })
  var marker = new google.maps.Marker({
    position: sandviksfjellet,
    map: map
  })
  var marker = new google.maps.Marker({
    position: løvstakken,
    map: map
  })
  var marker = new google.maps.Marker({
    position: damsgårdsfjellet,
    map: map
  })
  var marker = new google.maps.Marker({
    position: lyderhorn,
    map: map
  })

}
