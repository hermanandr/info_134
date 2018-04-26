// Lenker til JSON-data.
var toaletter = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser?";
var fjell = [
  {navn: 'ulriken',          lat:60.378, lng:5.387},
  {navn: 'fløyfjellet',      lat:60.399, lng:5.345},
  {navn: 'rundemanen',       lat:60.414, lng:5.364},
  {navn: 'sandviksfjellet',  lat:60.410, lng:5.340},
  {navn: 'løvstakken',       lat:60.374, lng:5.323},
  {navn: 'damsgårdsfjellet', lat:60.375, lng:5.291},
  {navn: 'lyderhorn',        lat:60.374, lng:5.241}
];
console.log(fjell);

var data = [];
var erNavn;

// legger til info om markøren til infovinduet. (Edvard)
function addInfo(list, marker, i){
  // om en liste har en attributt som heter 'navn', vil 'erNavn' returnere true.
  if(list[0].navn != undefined){
    erNavn = true;
  } else {
    erNavn = false;
  }
  // 'erNavn' brukes til å bestemme format til infovinduet markøren vil vise.(Edvard)
  var text;
  if(erNavn) {
    text = "<div id='info'><h3>" + list[i].navn + "</h3>"
  }else{
    text = "<div id='info'><h3>" + list[i].plassering + "</h3>"
    + "<h4>" + list[i].adresse + "</h4> ";
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

// legger til en liste over alle de forskjellige markørene. 'erNavn' bestemmer hvilke attributter objektene navngis fra. (Edvard)
function addList(list){
  if(erNavn) {
    for(var x = 0; x < list.length; x++){
      var navn = list[x].navn;
      var text = document.createTextNode(navn);
      var obj = document.createElement("li");
      obj.appendChild(text);
      document.getElementById("objList").appendChild(obj);
    }
  } else {
    for(var x = 0; x < list.length; x++){
      var adr = list[x].plassering;
      var text = document.createTextNode(adr);
      var obj = document.createElement("li");
      obj.appendChild(text);
      document.getElementById("objList").appendChild(obj);
    }
  }
}

//User-input fra skjemaet i avansert søk

/* var userInput = [];
function newSearch(){
  userInput.push(document.getElementById("avansertSok").value)
  console.log(userInput);
} */

function newSearch(form) {
  var parameters = "";
  for (var x=0, y=form.elements.length; x < y; x++) {
  var field = form.elements[x];
  if (field.name && field.type !== "submit") {
    parameters += "&" + encodeURIComponent(field.name) + "=" + (field.type == "radio" || field.type == "checkbox" ? (field.checked == "checked") : encodeURIComponent(field.value));
  }
  return parameters;
}
}

function advancedSearch() {
  var searchObject = [];
  var form = document.getElementById("formAdvanced").value;
  console.log(form.input.name)

  //for (i=0; i<)
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
//finner avstanden mellom to markører i km (Vegard)
var findDistance = function (marker1, marker2){
  var lat = ((marker1.latitude) - (marker2.latitude));
  var lng = ((marker1.longitude) - (marker2.longitude));
  var distance = Math.sqrt((lat*lat)+(lng*lng);
  return distance;
}

// 'initMap()' itererer over en gitt liste og plasserer markører på kartet for hvert element.
function initMap(list){
  var bergen = {lat:60.394106, lng:5.324017}

      var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center : bergen,
    map: map
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

// Oppretter og sender en XML-request etter en URL, og returnerer dataen mottatt. (Edvard)
function request(url){
  var xhr = new XMLHttpRequest();
  var entries =[];
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      var ent = JSON.parse(xhr.responseText);
      entries = ent.entries;
      console.log(entries);
      updateArray(entries);
      return entries;
    }
    else{
      return null;
    }
  }
    xhr.send();
}
// Oppdaterer den globale variabelen 'data' med gitt array. (Edvard)
function updateArray(array){
  data = array;
}
// 'loadMap' tar imot en URL, kjører 'request()' med den gitte URL'en, og reinitialiserer kartet med den oppdaterte lista. (Edvard)
function loadMap(url) {
  request(url);
  initMap(data);
}



/*

.value er verdien brukeren skriver inn.
.checked er verdien til checkbokser
lag et nytt objekt