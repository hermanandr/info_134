// Lenke til JSON-data.
var url= "http://hotell.difi.no/api/json/bergen/dokart";

// 'initMap()' itererer over 'toilets[]' og legger dem til på kartet. Da koordinatene er lagret som 'String'-verdier, konverteres de til tall ved hjelp av Number() (Edvard)
function initMap(list){
  console.log('init');
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
      map: map
    })
    addInfo(marker, i);
  }
  addList();
}

// legger til info om markøren til infovinduet. (Edvard)
var addInfo = function(marker, i){
  // stringen 'text' inneholder HTML-kode som vil vises i infovinduet (Edvard)
  var text = "<div id='info'><h3>" + toilets[i].plassering + "</h3>"
  + "<h4>" + toilets[i].adresse + "</h4> ";

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
function addList(){
  for(var x = 0; x < toilets.length; x++){
    var adr = toilets[x].plassering;
    var text = document.createTextNode(adr);
    var toilet = document.createElement("li");
    toilet.appendChild(text);
    document.getElementById("doFilter").appendChild(toilet);
  }
}

function search(searchObject) {
	var searchResults  = [];
	var searchParams = Object.keys(searchObject);
	for(i=0; i < toilets.length; i++) {
		var truthChecker = [] // will contain boolean values "true" for each param checked.
		for(y=0; y < searchParams.length; y++) {
			if(toilets[i][searchParams[y]] == searchObject[searchParams[y]]) {
				truthChecker.push(true);
			}
			if(truthChecker.length == searchParams.length) { //if all params are true, person is pushed.
				searchResults.push(toilets[i]);
			}
		}
	}
	initMap(searchResults);
  console.log(searchResults);
}

// Oppretter og sender en XML-request etter en URL, og returnerer dataen mottatt. (Edvard)
function request(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      var ent = JSON.parse(xhr.responseText);
      toilets = ent.entries;
      return toilets;
    }
    else{
      return null;
    }
  }
    xhr.send();
    // I tilfelle initMap() blir kjørt før 'toilets' er blitt gitt verdiene fra forespørselen, kalles den på ny etter den er blitt sendt. (Edvard)
    console.log('now');
    initMap(toilets);
}

// Oppretter den globale variabelen 'toilets' som et Array med data fra XML-requestet. (Edvard)
var toilets = request();
