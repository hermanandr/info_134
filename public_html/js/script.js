// Lenker til JSON-data.
var toaletter = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser?";
var utsiktspunkt = "https://hotell.difi.no/api/json/stavanger/utsiktspunkt?";

//koordinater til de syv fjell som vises på kartet på hjem-siden
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
      if(erNavn && document.getElementById('reload')) {
        text = "<div id='info'><h3>" + list[i].navn + "</h3><a onclick='chooseFavourite(data, data[" + i + "])'> <u><h4>Velg som favoritt</h4></u></a></div>"
      }else if(erNavn){
        text = "<div id='info'><h3>" + list[i].navn + "</h3>"
      }else if(list[i].plassering != undefined){
        text = "<div id='info'><h3>" + list[i].plassering + "</h3>"
        + "<h4>" + list[i].adresse + "</h4>";
      }else{
        text = "<div id='info'><h3>" + list[i].name + "</h3>";
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
  if(erNavn && document.getElementById('reload')) {
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
  } else if(erNavn) {
    for(var x = 0; x < list.length; x++){
      var liste = document.getElementById('objList');
      var navn = list[x].navn;
      var text = document.createTextNode(navn);
      var obj = document.createElement("li");
      obj.appendChild(text);
      document.getElementById("objList").appendChild(obj);
    }
  } else if(list[0].plassering != undefined) {
    for(var x = 0; x < list.length; x++){
      var liste = document.getElementById('objList');
      var adr = list[x].plassering;
      var text = document.createTextNode(adr);
      var obj = document.createElement("li");
      obj.appendChild(text);
      liste.appendChild(obj);
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

//Oppretter et søkeobjekt som inneholder alle kritieriene brukeren fyller ut i søkeskjemaet for "Utsiktspunkt".
function smallSearch() {
  var searchObject = {}; //Oppretter et tomt søkeobjekt

  //Henter input fra brukeren og legger det til i søkeobjektet
  for(var i=0; i<2; i++) {
    var input = document.getElementById(i);

    if(input.checked) {
      if(input.name == "tower"){
        searchObject["tower"] = "ja";
      } else if (input.name == "berg"){
        searchObject["berg"] = "ja";
      } else if(input.name = "sentrum"){
        searchObject["location"] = "sentrum";
      }
    }
  }
  search(data, searchObject);
}

// Hurtigsøk, jævla hurtigsøk
function searchAll() {
  var input = document.getElementById("fullSearch");
  var searchObject = {}; //Oppretter et tomt søkeobjekt
  var time = new Date(); //Finner dato og tid for nå


  console.log(input.value);

  //Splitter teksten brukeren skrev inn, ved hvert ",".
  var split = /([^,]+)/ig
  var splitInput = input.value.match(split);

  var pris = /pris:/ig;
  var herre = /herre/ig;
  var dame = /dame/ig;
  var rullestol = /rullestol/ig;
  var stellerom = /stellerom/ig;
  var openNow = /Åpent nå/ig;

  for(i=0; i < splitInput.length; i++) {
    if(splitInput[i].match(pris)){
      var cost = /(\d+)/;
      var found = splitInput[i].match(cost);
      searchObject["pris"] = found[0];
    } else if(splitInput[i].match(dame)){
      searchObject["dame"] = "1";
    } else if(splitInput[i].match(herre)){
      searchObject["herre"] = "1";
    } else if(splitInput[i].match(rullestol)){
      searchObject["rullestol"] = "1";
    } else if(splitInput[i].match(stellerom)){
      searchObject["stellerom"] = "1";
    } else if(splitInput[i].match(stellerom)){
      if(time.getDay == 0){
        searchObject["tid_sondag"] = time.getHours() + ":" + time.getMinutes();
      } else if(time.getDay == 6) {
        searchObject["tid_lordag"] = time.getHours() + ":" + time.getMinutes();
      } else {
        searchObject["tid_hverdag"] = time.getHours() + ":" + time.getMinutes();
      };
    } else {}

  }

  console.log(searchObject);

  search(data, searchObject);


  /* for(x = 0; x < splitInput.length; x++) {
    var adresse = list[i]["adresse"].toUpperCase();
    var navn = list[i]["plassering"].toUpperCase();
    var sok = splitInput[x].toUpperCase();
    if(sok == navn || sok == adresse){
      truthChecker.push(true);
    }
  } */
}

// Oppretter et søkeobjekt som inneholder alle kritieriene brukeren fyller ut i skjemaet "Avansert søk"
function advancedSearch() {

  var searchObject = {}; //Oppretter et tomt søkeobjekt
  var time = new Date(); //Finner dato og tid for nå

  //Henter input fra brukeren og legger det til i søkeobjektet
  for(var i=0; i<9; i++) {
    var input = document.getElementById(i);

    if(input.type == "checkbox") {
      if(input.name != "openNow" && input.name != "gratis") {
        if(input.checked) {
          searchObject[input.name] = "1";
        };
      } else if(input.name == "openNow"){
        if(input.checked) {
          if(time.getDay == 0){
            searchObject["tid_sondag"] = time.getHours() + ":" + time.getMinutes();
          } else if(time.getDay == 6) {
            searchObject["tid_lordag"] = time.getHours() + ":" + time.getMinutes();
          } else {
            searchObject["tid_hverdag"] = time.getHours() + ":" + time.getMinutes();
          };
        } else{};

      } else if (input.name == "gratis"){
        if(input.checked) {
          searchObject["pris"] = "0";
        };
      };

    } else if(input.name == "maksPris"){
      if(input.value.length > 0){
        searchObject["pris"] = input.value;
      }
    } else if(input.name == "openTime"){
      if(input.value.length > 0){
        if(time.getDay == 0){
          searchObject["tid_sondag"] = input.value;
        } else if(time.getDay == 6) {
          searchObject["tid_lordag"] = input.value;
        } else {
          searchObject["tid_hverdag"] = input.value;
        }
      }
    } else if (input.name == "fritekst"){
      if(input.value.length > 0){
        searchObject["fritekstSøk"] = input.value;
      }
    }
  };

  search(data, searchObject);
}

// Hentet og manipulert fra utdelte 'search.js'.
// Itererer over en gitt liste og ser etter et objekt som matcher søkeobjektet.
function search(list, searchObject) {
	var searchResults  = [];
  var searchParams = Object.keys(searchObject);

	for(i=0; i < list.length; i++) {
    var truthChecker = [] //Tomt array som fylles med en verdi "true" for hvert søkekriterie fra søkeobjektet som matcher en key i toalettobjektet.

    for(y=0; y < searchParams.length; y++) {
      if(searchParams[y].includes("tid")){
        //Sjekker om toalettet er åpent
        if(isToiletOpen(searchObject[searchParams[y]], list[i][searchParams[y]])) {
          truthChecker.push(true);
        }
      } else if(searchParams[y].includes("pris")){
        //Sjekker om prisen er lavere eller lik enn prisen brukeren har søkt om
        if(list[i][searchParams[y]] <= searchObject[searchParams[y]]){
          truthChecker.push(true);
        }
      } else if(searchParams[y].includes("fritekstSøk")){
        //Sjekker om teksten brukeren skrev matcher med navn eller adresse til et toalett. Kun mulig å søke på ett toalett
        var split = /([^,]+)/ig
        var splitInput = searchObject[searchParams[y]].match(split);

        for(x = 0; x < splitInput.length; x++) {
          var adresse = list[i]["adresse"].toUpperCase();
          var navn = list[i]["plassering"].toUpperCase();
          var sok = splitInput[x].toUpperCase();
          if(sok == navn || sok == adresse){
            truthChecker.push(true);
          }
        }
      } else if (searchParams[y].includes("tower")){
        var key = /tårn/i;
        var hasKey = key.test(list[i]["name"]);
        if(hasKey){
          truthChecker.push(true);
        }
      } else if (searchParams[y].includes("berg")){
        var key = /berg/i;
        var hasKey = key.test(list[i]["name"]);
        if(hasKey){
          truthChecker.push(true);
        }
      } else if (searchParams[y].includes("berg")){

        searchObject["latitude"] = "58.970008";
        searchObject["longitude"] = "5.733369";
      } else if(list[i][searchParams[y]] == searchObject[searchParams[y]]) {
				truthChecker.push(true);
      };
			if(truthChecker.length == searchParams.length) { //Hvis alle kriteriene til søkeobjekter er oppfylt, legges objektet som matcher søkeobjektet til i resultatlisten.
				searchResults.push(list[i]);
			}
		}
	}
  // kartet blir reinitialisert med bare søkeresultatene.
  initMap(searchResults);
  console.log(searchResults);
}

//Sjekker tiden brukeren fyller inn opp mot åpningstiden for et bestemt toalett, for dagen i dag, og returnerer true eller false ettersom toalettet er åpent eller ikke.
function isToiletOpen(searchTime, toiletTime) {

  //return true;

  if(toiletTime == "NULL") {
    return false;
  } else if (toiletTime == "ALL") {
    return true;
  } else {

    //Splitter opp klokkeslettene til timer og minutter
    var splitSearch = searchTime.split(":");
    var splitToilet = toiletTime.split(" - ");
    var toiletOpens = splitToilet[0].split(".");
    var toiletCloses = splitToilet[1].split(".");

    //Konverterer timer og minutter, til minutter
    var searchMin = splitSearch[0] * 60 + Number(splitSearch[1]);
    var opensMin = toiletOpens[0] * 60 + Number(toiletOpens[1]);
    var closesMin = toiletCloses[0] * 60 + Number(toiletCloses[1]);

    //Sjekker om tiden brukeren søker, er innenfor åpningstidene til toalettet
    if(searchMin >= opensMin && searchMin <= closesMin){
      return true;
    };
  }
}

//finner avstanden mellom to markører
var findDistance = function (marker1, marker2){
  var lat = ((marker1.latitude) - (marker2.latitude));
  var lng = ((marker1.longitude) - (marker2.longitude));
  var distance = Math.sqrt((lat*lat)+(lng*lng));
  return distance;
}

//Finner nærmeste toalett
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

//Valg av favoritt lekeplass
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

  // Skjer noe her når man søker på alle kriterier i avansert søk
  if(list[0].name != undefined){
    city = stavanger;
    _zoom = 10;
  } else {
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
