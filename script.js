const myKey = '5ddSWV2YXIM5TDrRNqyVAF6X9f95wuyC'
let baseCurrency = document.getElementById("base-currency").value;
let targetCurrency = document.getElementById("target-currency").value;
let enteredAmount = document.getElementById("amount").value;
let convertedAmount = document.getElementById("converted-amount");
console.log(baseCurrency);
console.log(targetCurrency);
console.log(enteredAmount);

let myHeaders = new Headers();
myHeaders.append("apikey", myKey);

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// eventlistener for line 16
document.getElementById("base-currency").addEventListener("change", getExchangeRates);
document.getElementById("targetCurrency").addEventListener("change", getExchangeRates);
document.getElementById("amount").addEventListener("change", getExchangeRates);


function getExchangeRates() {
fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${enteredAmount}`, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    const rate = data.info.rate;
    let newAmount = rate*enteredAmount;  
    convertedAmount.innerHTML = newAmount + ' ' + targetCurrency;
  })
  .catch(error => console.log('error', error));
}



