function startProgram() {
  console.log("tekst");
  var url= "https://hotell.difi.no/api/json/bergen/dokart?";
  request(url);
}

function request(url){
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
  console.log("Type", xhr.getResponseHeader("Content-Type"));
  var data = JSON.parse(xhr.responseText);
  return data;
} else {
  return null;
};
xhr.send();
}
}

//Søkeobjektet kan bli laget av den samme funksjonen om man parser tektsen på forhånd
var searchObj = {"kjønn":"herre"};

//Oppgave 8, DOM-element

var el = document.getElementById("element");
var h2_element = document.createElement("h2");
var h2_text = document.createTextNode(plassering);
h2_element.appendChild(h2_text);


// arrayet 'entries' med do-objektene fra JSON-dataen lagres i 'toilets', og logges for kontroll. (Edvard)
var toilets = data;
console.log(toilets);
console.log(toilets[0]);


// legger til info om markøren til infovinduet.
var addInfo = function(marker, i){
  // stringen 'text' inneholder HTML-kode som vil vises i infovinduet
  var text = "<div id='info'><h3>" + toilets[i].plassering + "</h3>"
  + "<ul id='egenskaper'></ul></div>";

  function infoList(){
    var listIt = Object.keys(toilets[i]);
    for(var x = 0; x < listIt.length; x++){
      var txt = listIt[x] + ': ' + toilets[i][listIt[x]];
      var node = document.createTextNode(txt);
      var listObj = document.createElement('li');
      listObj.appendChild(node);
      document.getElementById('egenskaper').appendChild(listObj);
    }
  }

  marker.addListener('click', function() {
    if(marker.open != true){
    infowindow.open(map, marker);
    marker.open = true;
    infoList();
    console.log(marker);
    } else {
    infowindow.close(map, marker);
    marker.open = false;
    console.log(marker);
    }
  });

  var infowindow = new google.maps.InfoWindow({
    content: text
  });
}

// 'initMap()' itererer over 'toilets' og legger dem til på kartet. Da koordinatene er lagret som 'String'-verdier, konverteres de til tall ved hjelp av Number() (Edvard)
function initMap() {
  var bergen = {lat:60.394106, lng:5.324017}

      var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center : bergen,
    map: map
  });

  for(var i = 0; i < toilets.length; i++){
    var marker = new google.maps.Marker({
      position: {
        lat:Number(toilets[i].latitude),
        lng:Number(toilets[i].longitude)
      },
      map: map
    })
    addInfo(marker, i);
  }
}

// legger til en liste over alle de forskjellige markørene, navngitt etter plassering. (Edvard)
var addList = function(){
  for(var x = 0; x < toilets.length; x++){
    var adr = toilets[x].plassering;
    var text = document.createTextNode(adr);
    var toilet = document.createElement("li");
    toilet.appendChild(text);
    document.getElementById("doFilter").appendChild(toilet);
  }
}
