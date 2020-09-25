var xhttp = new XMLHttpRequest();
var baseUrl = "https://covid2019-api.herokuapp.com/v2/country/";

var text = document.getElementById('text');
var button = document.getElementById('button');
var country = document.getElementById('country');
var confirmed = document.getElementById('confirmed');
var active = document.getElementById('active');
var deaths = document.getElementById('deaths');
var recovered = document.getElementById('recovered');

button.onclick = () => { covid19data() };

const covid19data = () => {
  let url = baseUrl+text.value;

  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = () => {//Função a ser chamada quando a requisição retornar do servidor
      if ( xhttp.readyState === 4 && xhttp.status === 200 ) {//Verifica se o retorno do servidor deu certo
          let data = JSON.parse(xhttp.response).data;
          info(data);
      }
  }
  xhttp.send();
};

const info = (data) => {
  country.innerHTML = `Country: ${data.location}`;
    confirmed.innerHTML = `Confirmed: ${data.confirmed}`;
    active.innerHTML = `Active: ${data.active}`;
    deaths.innerHTML = `Deaths: ${data.deaths}`;
    recovered.innerHTML = `Recovered: ${data.recovered}`;
}
