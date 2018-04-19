// Lenke til JSON-data.
var toaletter = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser?";
var data = [];

// legger til info om markøren til infovinduet. (Edvard)
function addInfo(list, marker, i){
  // stringen 'text' inneholder HTML-kode som vil vises i infovinduet (Edvard)
  var text = "<div id='info'><h3>" + list[i].plassering + "</h3>"
  + "<h4>" + list[i].adresse + "</h4> ";

  marker.addListener('click', function() {
    if(marker.open != true){
      infowindow.open(map, marker);
      marker.open = true;
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

// legger til en liste over alle de forskjellige markørene, navngitt etter plassering. (Edvard)
function addList(list){
  for(var x = 0; x < list.length; x++){
    var adr = list[x].plassering;
    var text = document.createTextNode(adr);
    var toilet = document.createElement("li");
    toilet.appendChild(text);
    document.getElementById("doFilter").appendChild(toilet);
  }
}

function search(searchObject) {
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
	initMap(searchResults);
  console.log(searchResults);
}

// 'initMap()' itererer over 'list[]' og legger dem til på kartet. Da koordinatene er lagret som 'String'-verdier, konverteres de til tall ved hjelp av Number() (Edvard)
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
    addInfo(list, marker, i);
  }
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
      console.log("couldn't load dataset: " + url);
      return null;
    }
  }
    xhr.send();
}

function updateArray(array){
  data = array;
}

function loadMap(url) {
  request(url);
  initMap(data);
}

loadMap(toaletter);
