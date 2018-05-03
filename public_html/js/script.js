// Lenker til JSON-data.
var toaletter = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser?";
var utsiktspunkt = "https://hotell.difi.no/api/json/stavanger/utsiktspunkt?";

var fjell = [
  {navn: 'ulriken',          latitude:60.378, longitude:5.387},
  {navn: 'fløyfjellet',      latitude:60.399, longitude:5.345},
  {navn: 'rundemanen',       latitude:60.414, longitude:5.364},
  {navn: 'sandviksfjellet',  latitude:60.410, longitude:5.340},
  {navn: 'løvstakken',       latitude:60.374, longitude:5.323},
  {navn: 'damsgårdsfjellet', latitude:60.375, longitude:5.291},
  {navn: 'lyderhorn',        latitude:60.374, longitude:5.241}
];

var data = [];
var otherArray = [];
var erNavn;
var favourite = {};
var closest = {};

// legger til info om markøren til infovinduet.
function addInfo(list, marker, i){
  // om en liste har en attributt som heter 'navn', vil 'erNavn' returnere true.
    for(var y in list){
      if(list[i].navn != undefined){
      erNavn = true;
    } else {
      erNavn = false;
    }
    // 'erNavn' brukes til å bestemme format til infovinduet markøren vil vise.
    var text;
      if(erNavn) {
        text = "<div id='info'><h3>" + list[i].navn + "</h3><a onclick='chooseFavourite(data, data[" + i + "])'> <u><h4>Velg som favoritt</h4></u></a>"
      }else{
        text = "<div id='info'><h3>" + list[i].plassering + "</h3>"
        + "<h4>" + list[i].adresse + "</h4>";
      }
    }

  marker.addListener('click', function() { if(marker.open != true){
      infowindow.open(map, marker); marker.open = true;
    } else {
      infowindow.close(map, marker); marker.open = false;
    }
  });

  var infowindow = new google.maps.InfoWindow({
    content: text
  });
}

// legger til en liste over alle de forskjellige markørene. 'erNavn' bestemmer hvilke attributter objektene navngis fra.
function addList(list){
  if(erNavn) {
    for(var x = 0; x < list.length; x++){
      var liste = document.getElementById('objList');
      var navn = list[x].navn;
      var obj = document.createElement("li");
      var a = document.createElement("a");
      a.textContent = navn;
      a.setAttribute('onclick', 'chooseFavourite(data, data[' + x + '])' );
      obj.appendChild(a);
      document.getElementById("objList").appendChild(obj);
    }
  } else if(list[0].plassering != undefined) {
    for(var x = 0; x < list.length; x++){
      var adr = list[x].plassering;
      var text = document.createTextNode(adr);
      var obj = document.createElement("li");
      obj.appendChild(text);
      document.getElementById("objList").appendChild(obj);
    }
  } else {
    for(var x = 0; x < list.length; x++){
      var adr = list[x].name;
      var text = document.createTextNode(adr);
      var obj = document.createElement("li");
      obj.appendChild(text);
      document.getElementById("objList").appendChild(obj);
  }
}
}
// Hentet og manipulert fra utdelte 'search.js'.
// Itererer over en gitt liste og ser etter et objekt som matcher søkeobjektet.
function search(list, searchObject) {
	var searchResults  = [];
	var searchParams = Object.keys(searchObject);
	for(i=0; i < list.length; i++) {
		var truthChecker = [] // will contain boolean values "true" for each param checked.
		for(y=0; y < searchParams.length; y++) {
			if(list[i][searchParams[y]] == searchObject[searchParams[y]]) {
				truthChecker.push(true);
			}
			if(truthChecker.length == searchParams.length) { //if all params are true, person is pushed.
				searchResults.push(list[i]);
			}
		}
	}
  // kartet blir reinitialisert med bare søkeresultatene.
	initMap(searchResults);
  console.log(searchResults);
}
//finner avstanden mellom to markører i km
function findDistance(marker1, marker2){
  var lat = ((marker1.latitude) - (marker2.latitude));
  var lng = ((marker1.longitude) - (marker2.longitude));
  var distance = Math.sqrt((lat*lat)+(lng*lng));
  return distance;
}

function findNeighbour(lekeplass, list){
  var closest;
  var shortest;
  for(var i = 0; i < list.length; i++){
    if(shortest == undefined && list[i] != lekeplass){
      shortest = findDistance(lekeplass, list[i]);
      console.log(shortest);
      closest = list[i];
    }else if(list[i] != lekeplass && findDistance(lekeplass, list[i]) < shortest){
      shortest = findDistance(lekeplass, list[i]);
      closest = list[i];
    }
  }
  return closest;
}

function chooseFavourite(list, lekeplass){
  var chosen = [];
  favourite = lekeplass;
  var neighbour = findNeighbour(favourite, otherArray);
  console.log(neighbour);
  chosen.push(favourite, neighbour);
  console.log(chosen);
  initMap(chosen);
}

// 'initMap()' itererer over en gitt liste og plasserer markører på kartet for hvert element.
function initMap(list){
  var bergen = {lat:60.394106, lng:5.324017};
  var stavanger = {lat:58.971, lng:5.732};

  var city = {};
  var _zoom;

  if(list[0].name != undefined){
    city = stavanger;
    _zoom = 10;
  }else{
    city = bergen;
    _zoom = 13;
  }

  if(list[0].navn == 'ulriken'){
    _zoom = 12;
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: _zoom,
    center : city
  });

  for(var i = 0; i < list.length; i++){
    var marker = new google.maps.Marker({
      position: {
        lat:Number(list[i].latitude),
        lng:Number(list[i].longitude)
      },
      label: (i + 1).toString(),
      map: map
    })
    addInfo(list, marker, i); // Informasjon som adresse o.l. blir lagt til i infovinduet til markøren.
  }
  // Legger alle elementene som viser på kartet til i en liste.
  addList(list);
}

// Oppretter og sender en XML-request etter en URL, og returnerer dataen mottatt.
function request(url, callback){
  var xhr = new XMLHttpRequest();
  var entries =[];
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      entries = JSON.parse(xhr.responseText).entries;
      console.log(entries);
      callback(entries);
    }
    else{
      return null;
    }
  }
    xhr.send();
}
// Oppdaterer den globale variabelen 'data' med gitt array.
function updateArray(array){
  data = array;
  initMap(data);
}

function loadOtherArray(list){
  otherArray = list;
}

// 'loadMap' tar imot en URL, kjører 'request()' med den gitte URL'en, og reinitialiserer kartet med den oppdaterte lista.
function loadMap(url) {
  request(url, updateArray);
}
