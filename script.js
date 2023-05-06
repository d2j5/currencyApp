const myKey = '5ddSWV2YXIM5TDrRNqyVAF6X9f95wuyC';
let baseCurrency = document.getElementById("base-currency").value;
let targetCurrency = document.getElementById("target-currency").value;
let enteredAmount = document.getElementById("amount").value;
let convertedAmount = document.getElementById("converted-amount");

let myHeaders = new Headers();
myHeaders.append("apikey", myKey);

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

document.getElementById("base-currency").addEventListener("change", getExchangeRates);
document.getElementById("target-currency").addEventListener("change", getExchangeRates);
document.getElementById("amount").addEventListener("input", getExchangeRates);

function getExchangeRates() {
  baseCurrency = document.getElementById("base-currency").value;
  targetCurrency = document.getElementById("target-currency").value;
  enteredAmount = document.getElementById("amount").value;

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${enteredAmount}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.info.rate;
      let newAmount = rate*enteredAmount;  
      let roundedAmount = newAmount.toFixed(2);
      convertedAmount.innerHTML = roundedAmount + ' ' + targetCurrency;
    })
    .catch(error => console.log('error', error));
}

const historicalButton = document.querySelector("#historical-rates");
const historicalResults = document.querySelector("#historical-rates-container");

historicalButton.addEventListener("click", () => {
  const baseCurrency = document.querySelector("#base-currency").value;
  const targetCurrency = document.querySelector("#target-currency").value;
  const date = document.getElementById("selectedDay").value;
  
  fetch(`https://api.apilayer.com/exchangerates_data/${date}?symbols=${targetCurrency}&base=${baseCurrency}`, requestOptions)
  .then(response => response.json())
  .then(data => {
    const rates = data.rates;
    let rate = 0;
    for (let currency in rates) {
      if(currency === targetCurrency) {
        rate = rates[currency];
        break;
      }
    }
    historicalResults.textContent = `Historical exchange rate on ${date}: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
  })
  .catch(error => console.log('error', error));
});



  
