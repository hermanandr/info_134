function startProgram () {
  console.log("tekst");
}
// Lagrer JSON-data som et javascript-objekt "doJSON".
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
// JSON-filen inneholder et Array som heter 'entries', som inneholder hvert do-objekt. Vi lagrer dette i den globale variabelen 'toilets'.
// 'toilets' logges til konsollen for å kontrollere at vi har lagret et array med do-objekter.

var toilets = doJSON.entries;
console.log(toilets);
console.log(toilets.length);

// posisjonene lagres i kart-API'en til Google, enkelt navngitt fra 0-13. Da høyde & breddegradene til posisjonene er lagret som String-objekter, bruker vi Number() funksjonen på longitude & latitude attributtene for å konvertere Strengene til tallverdier som kan brukes i API'en.
function initMap() {
  var bergen = {lat:60.391, lng:5.322}

  var toilet0 = {lat:Number(toilets[0].latitude), lng:Number(toilets[0].longitude)}
  var toilet1 = {lat:Number(toilets[1].latitude), lng:Number(toilets[1].longitude)}
  var toilet2 = {lat:Number(toilets[2].latitude), lng:Number(toilets[2].longitude)}
  var toilet3 = {lat:Number(toilets[3].latitude), lng:Number(toilets[3].longitude)}
  var toilet4 = {lat:Number(toilets[4].latitude), lng:Number(toilets[4].longitude)}
  var toilet5 = {lat:Number(toilets[5].latitude), lng:Number(toilets[5].longitude)}
  var toilet6 = {lat:Number(toilets[6].latitude), lng:Number(toilets[6].longitude)}
  var toilet7 = {lat:Number(toilets[7].latitude), lng:Number(toilets[7].longitude)}
  var toilet8 = {lat:Number(toilets[8].latitude), lng:Number(toilets[8].longitude)}
  var toilet9 = {lat:Number(toilets[9].latitude), lng:Number(toilets[9].longitude)}
  var toilet10 = {lat:Number(toilets[10].latitude), lng:Number(toilets[10].longitude)}
  var toilet11 = {lat:Number(toilets[11].latitude), lng:Number(toilets[11].longitude)}
  var toilet12 = {lat:Number(toilets[12].latitude), lng:Number(toilets[12].longitude)}
  var toilet13 = {lat:Number(toilets[13].latitude), lng:Number(toilets[13].longitude)}
      var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center : bergen,
    map: map
  });
  var marker = new google.maps.Marker({
    position: toilet0,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet1,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet2,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet3,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet4,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet5,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet6,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet7,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet8,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet9,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet10,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet11,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet12,
    map: map
  })
  var marker = new google.maps.Marker({
    position: toilet13,
    map: map
  })
}
