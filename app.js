var myJSON = '';
var x,i,j,k,l = '';

//Haetaan JSON
function getJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myJSON = this.responseText;
        tuotteetObj = JSON.parse(myJSON);
      }
    };
    xhttp.open("GET", "/tuotteet.json", true);
    xhttp.send();
  }

//Luodaan taulukko
var i = 0;
let tuotteetObj = '';
function getProds(){
    x = '<table id="tuotteet"><tr><th>Tuote ID</th><th>Nimi</th><th>Ostohinta</th><th>Myyntihinta</th><th>Toimittaja</th><th>Kate €</th><th>Kate %</th></tr>';
    for (i in tuotteetObj.tuotteet) 
    {
    x += '<tr><td>' + tuotteetObj.tuotteet[i].tuoteID + '</td>';
    x += '<td>' + tuotteetObj.tuotteet[i].tuoteNimi + '</td><td>' + tuotteetObj.tuotteet[i].ostoHinta + '</td><td>' 
    + tuotteetObj.tuotteet[i].myyntiHinta + '</td><td>' 
    + tuotteetObj.tuotteet[i].toimittaja + '</td><td>' 
    + eval(tuotteetObj.tuotteet[i].myyntiHinta-tuotteetObj.tuotteet[i].ostoHinta).toPrecision(2) + '</td><td>'
    + eval(100-(tuotteetObj.tuotteet[i].ostoHinta/tuotteetObj.tuotteet[i].myyntiHinta*100)).toPrecision(4) + '</td></tr>';
    
    }
    x += '</table>';
    document.getElementById('tuotteet').innerHTML = x;
}

//Luodaan linkkilista
var linkit = [];
var linkitU = [];

//Haetaan kaikki linkit array
function getLinks(){
    for (let j = 0; j < tuotteetObj.tuotteet.length; j++) {
        linkit.push(tuotteetObj.tuotteet[j].linkki)
        }
    }

//Poistetaan tuplat linkki-arraysta
function trimLinks(){
    for (let k = 0; k < linkit.length; k++){
        if (linkitU.indexOf(linkit[k]) === -1){
            linkitU.push(linkit[k]);
        }
    }
}

//Luodaan linkkilista
function getLinksB(){
    let linkitB = [];
    getLinks();
    trimLinks();
    for(let l = 0;l < linkitU.length;l++){
        linkitB += '<li>' + '<a target="_blank" href=https://' + linkitU[l] + '>' + linkitU[l] + '</a>' + '</li>';
    }
    document.getElementById('linkit').innerHTML = linkitB;
}