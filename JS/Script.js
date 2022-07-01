//http://cne.cloudapi.junar.com/api/v2/datastreams/BNE-2013-VARIA-CONSU-BRUTO/data.json/?auth_key=53257e294a0c3a9f6a5bc41172210aef2ec97ddd
let dropdown = document.getElementById('comunas');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Seleccione Comuna';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://cne.cloudapi.junar.com/api/v2/datastreams/BNE-2013-VARIA-CONSU-BRUTO/data.json/?auth_key=53257e294a0c3a9f6a5bc41172210aef2ec97ddd';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      dropdown.add(option);
    }
   } else {
    // Erroriño macaco
  }   
}

request.onerror = function() {
  console.error('Error Recorriendo la lista macaco ' + url);
};

request.send();