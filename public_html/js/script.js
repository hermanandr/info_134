var url= "http://hotell.difi.no/api/json/bergen/dokart";
var data = [];
var toilets = [];

function request(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      var ent = JSON.parse(xhr.responseText);
      data = ent.entries;
      console.log(data);
      toilets = data.entries;
    }
    else{
      return null;
    }
  }
    xhr.send();
}

// Lagrer JSON-data som et javascript-objekt "doJSON". (Edvard)
var doJSON = {
    "entries": [{
        "herre": "1",
        "tid_sondag": "07.00 - 23.15",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.3879681",
        "tid_hverdag": "07.00 - 23.15",
        "plassering": "NONNESETER TERMINAL, SØR",
        "tid_lordag": "07.00 - 23.15",
        "rullestol": "1",
        "adresse": "Lungegårdskaien",
        "pris": "12",
        "id": "1",
        "place": "NONNESETER TERMINAL, SOUTH",
        "dame": "1",
        "longitude": "5.334608"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.3884988",
        "tid_hverdag": "05.30 - 23.50",
        "plassering": "NONNESETER TERMINAL , NORD",
        "tid_lordag": "07.00 - 23.15",
        "rullestol": "1",
        "adresse": "Østre Strømkai",
        "pris": "12",
        "id": "2",
        "place": "NONNESETER TERMINAL , NORTH",
        "dame": "1",
        "longitude": "5.3345382"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.388868",
        "tid_hverdag": "09.00 - 17.00",
        "plassering": "SKYSS KUNDESENTER",
        "tid_lordag": "09.00 - 15.00",
        "rullestol": "1",
        "adresse": "Østre Strømkai",
        "pris": "12",
        "id": "3",
        "place": "SKYSS CUSTOMER CENTRE",
        "dame": "1",
        "longitude": "5.3337597"
    }, {
        "herre": "1",
        "tid_sondag": "07.00 - 23.00",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.39041",
        "tid_hverdag": "07.00 - 23.00",
        "plassering": "JERNBANESTASJONEN",
        "tid_lordag": "07.00 - 23.00",
        "rullestol": "NULL",
        "adresse": "Strømgaten 4",
        "pris": "10",
        "id": "4",
        "place": "RAILWAY STATION",
        "dame": "1",
        "longitude": "5.332995"
    }, {
        "herre": "1",
        "tid_sondag": "08.30 - 22.00",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.394554",
        "tid_hverdag": "09.00 - 23.00",
        "plassering": "MATHALLEN",
        "tid_lordag": "08.30 - 22.00",
        "rullestol": "1",
        "adresse": "Strandkaien 3",
        "pris": "10",
        "id": "5",
        "place": "FISH MARKET",
        "dame": "1",
        "longitude": "5.324099"
    }, {
        "herre": "1",
        "tid_sondag": "08.00 - 18.00",
        "pissoir_only": "NULL",
        "stellerom": "",
        "latitude": "60.3951003",
        "tid_hverdag": "08.00 - 18.00",
        "plassering": "STRANDKAITERMINALEN",
        "tid_lordag": "08.00 - 18.00",
        "rullestol": "",
        "adresse": "Strandkaien",
        "pris": "10",
        "id": "6",
        "place": "STRANDKAI BOAT TERMINAL",
        "dame": "1",
        "longitude": "5.3220606"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.3913793",
        "tid_hverdag": "08.00 - 15.00",
        "plassering": "BERGEN KOMMUNE, INNBYGGERSERVICE",
        "tid_lordag": "NULL",
        "rullestol": "1",
        "adresse": "Kaigaten 4",
        "pris": "0",
        "id": "7",
        "place": "CITIZEN SERVICE CENTRE",
        "dame": "1",
        "longitude": "5.3290558"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.3891105",
        "tid_hverdag": "09.00 - 21.00",
        "plassering": "BERGEN STORSENTER",
        "tid_lordag": "09.00 - 18.00",
        "rullestol": "1",
        "adresse": "Strømgaten 8",
        "pris": "10",
        "id": "8",
        "place": "BERGEN STORSENTER",
        "dame": "1",
        "longitude": "5.3322315"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.392209",
        "tid_hverdag": "09.00 - 21.00",
        "plassering": "SUNDT MOTEHUS",
        "tid_lordag": "09.00 - 18.00",
        "rullestol": "1",
        "adresse": "Torgallmenningen 14",
        "pris": "10",
        "id": "9",
        "place": "SUNDT FASHION HOUSE",
        "dame": "1",
        "longitude": "5.324011"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.3927098",
        "tid_hverdag": "09.00 - 20.00",
        "plassering": "XHIBITION",
        "tid_lordag": "09.00 - 18.00",
        "rullestol": "1",
        "adresse": "Småstrandgaten 3",
        "pris": "10",
        "id": "10",
        "place": "XHIBITION",
        "dame": "1",
        "longitude": "5.3262019"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.3932345",
        "tid_hverdag": "09.00 - 21.00",
        "plassering": "GALLERIET",
        "tid_lordag": "09.00 - 18.00",
        "rullestol": "1",
        "adresse": "Torgallmenningen 8",
        "pris": "10",
        "id": "11",
        "place": "GALLERIET",
        "dame": "1",
        "longitude": "5.3252363"
    }, {
        "herre": "1",
        "tid_sondag": "NULL",
        "pissoir_only": "NULL",
        "stellerom": "1",
        "latitude": "60.3944194",
        "tid_hverdag": "10.00 - 20.00",
        "plassering": "KLØVERHUSET",
        "tid_lordag": "10.00 - 18.00",
        "rullestol": "1",
        "adresse": "Strandgaten 13 -15",
        "pris": "10",
        "id": "12",
        "place": "KLØVERHUSET",
        "dame": "1",
        "longitude": "5.3205649"
    }, {
        "herre": "1",
        "tid_sondag": "09.00 - 18.00",
        "pissoir_only": "NULL",
        "stellerom": "NULL",
        "latitude": "60.3975913",
        "tid_hverdag": "09.00 - 18.00",
        "plassering": "BRYGGEN BESØKSSENTER",
        "tid_lordag": "09.00 - 18.00",
        "rullestol": "1",
        "adresse": "Jacobsfjorden, Bryggen",
        "pris": "10",
        "id": "13",
        "place": "BRYGGEN VISITOR CENTRE",
        "dame": "1",
        "longitude": "5.3244317"
    }, {
        "herre": "NULL",
        "tid_sondag": "ALL",
        "pissoir_only": "1",
        "stellerom": "NULL",
        "latitude": "60.3973581",
        "tid_hverdag": "ALL",
        "plassering": "C. SUNDTSGT",
        "tid_lordag": "ALL",
        "rullestol": "NULL",
        "adresse": "C. Sundts gt",
        "pris": "NULL",
        "id": "14",
        "place": "C. SUNDTSGT",
        "dame": "NULL",
        "longitude": "5.3132629"
    }],
    "page": 1,
    "pages": 1,
    "posts": 14
};

// arrayet 'entries' med do-objektene fra JSON-dataen lagres i 'toilets', og logges for kontroll. (xic008)
function makeArray(array){
  toilets = array;
  console.log(toilets);
  console.log(toilets[0]);
}


// 'initMap()' itererer over 'toilets' og legger dem til på kartet. Da koordinatene er lagret som 'String'-verdier, konverteres de til tall ved hjelp av Number() (xic008)
function initMap(){
  console.log('init');
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

// legger til en liste over alle de forskjellige markørene, navngitt etter plassering. (xic008)
var addList = function(){
  for(var x = 0; x < toilets.length; x++){
    var adr = toilets[x].plassering;
    var text = document.createTextNode(adr);
    var toilet = document.createElement("li");
    toilet.appendChild(text);
    document.getElementById("doFilter").appendChild(toilet);
  }
}
