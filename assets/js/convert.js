var mainCon = document.getElementById("container");

const getCryptoData = async () => {
  fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,DOGE,XRP,SHIB&tsyms=USD")
    .then((response) => response.json())
    .then((data) => {
      for (const key in data) {
        console.log(key, data[key].USD);
        var tag = document.createElement("p");
        tag.setAttribute("class", "calc-info");
        tag.innerHTML = `Current ${key} price: $` + data[key].USD;
        mainCon.appendChild(tag);
        var amount = document.getElementById("usd").value;
        var convertedPrice = amount / data[key].USD;
        tag = document.createElement("p");
        tag.setAttribute("class", "calc-info");
        tag.innerHTML = "You can buy " + convertedPrice.toFixed(8) + " share of " + key;
        mainCon.appendChild(tag);
        console.log(convertedPrice);
      }
    });
};


function takeInput() {
  getCryptoData();
}

function clearAll() {
  $('.calc-info').empty();
  document.getElementById("usd").value = "";
}
