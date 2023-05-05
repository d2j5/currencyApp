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

function getExchangeRates() {
fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${enteredAmount}`, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    const rate = data.info.rate;
    resultRate(rate);  
  })
  .catch(error => console.log('error', error));
}

function resultRate(rate) {
let newAmount = enteredAmount*rate;
convertedAmount.innerHTML = newAmount + ' ' + targetCurrency;
}

echo "# currencyApp" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/d2j5/currencyApp.git
git push -u origin main
