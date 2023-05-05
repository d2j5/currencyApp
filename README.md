Currency Converter Application
 

Objective:
As a final assessment for the JavaScript unit, you will create a more advanced currency converter application using JavaScript, while the HTML and CSS will be provided. This project will test your knowledge of JavaScript concepts, such as fetching data from an API, manipulating the DOM, handling user input, performing calculations, and adding additional features like historical exchange rates and favorite currency pairs. The currency converter should allow users to select different currencies, input an amount to be converted, view historical exchange rates, and save their favorite currency pairs for quick access.

 

Requirements:
Use the provided HTML and CSS files for the user interface
Display a user interface that allows users to choose two currencies (base and target) and input an amount
Fetch exchange rate data from an API, such as the free Exchange Rates API (https://exchangeratesapi.io/ Links to an external site.)
Perform currency conversion calculations based on the exchange rate data
Display the converted amount in the target currency
Add functionality to view historical exchange rates between the selected currency pair
Allow users to save and access their favorite currency pairs for quick conversion
 

Instructions:
Use the provided index.html and style.css files for the user interface. Make any necessary modifications to include additional features such as historical exchange rates and favorite currency pairs.

In script.js, write the JavaScript code to handle the currency conversion and additional features:

Add event listeners for user actions like selecting currencies, inputting an amount, viewing historical exchange rates, and managing favorite currency pairs
Fetch the exchange rate data from the API using the selected base currency
Perform the currency conversion calculation using the fetched exchange rate data and the input amount
Update the displayed converted amount in the target currency
Implement the functionality to fetch and display historical exchange rates between the selected currency pair
Allow users to save their favorite currency pairs and access them for quick conversion
Test your currency converter application to ensure it meets all requirements and behaves correctly in various scenarios, such as selecting different currencies, inputting various amounts, viewing historical exchange rates, and managing favorite currency pairs.

 

More Detailed Instructions:
Currency conversion:

Allow users to select a base currency and a target currency using two dropdown menus.
Provide an input field for users to enter the amount they want to convert from the base currency to the target currency.
Fetch the current exchange rate data from an API, such as the free Exchange Rates API, for the selected base currency.
Perform the currency conversion calculation using the fetched exchange rate data and the input amount.
Display the converted amount in the target currency.
Historical exchange rates:

Add a button to fetch and display historical exchange rates between the selected currency pair.
When the button is clicked, fetch historical exchange rate data from the API for a specific date (hardcoded or user-selected) for the selected base and target currencies.
Display the historical exchange rate data in a readable format, such as: "Historical exchange rate on [date]: 1 [base currency] = [rate] [target currency]".
Example 1: "Historical exchange rate on 2021-01-01: 1 USD = 0.8150 EUR"
Example 2: "Historical exchange rate on 2021-06-15: 1 GBP = 1.4102 USD"
The historical rates can be displayed as a simple text message, showing the historical exchange rate between the selected currency pair on a specific date.
Favorite currency pairs:

Add a button to save the currently selected currency pair as a favorite.
When the button is clicked, store the selected currency pair into a variable within the application OR in the user's browser (using local storage or another method).
Display a list of the user's saved favorite currency pairs in a dedicated section.
Allow users to access their favorite currency pairs for quick conversion by clicking on them, which should automatically update the base and target currency dropdown menus to the selected favorite pair.
Example 1: ["USD/EUR", "GBP/USD", "JPY/USD"]
Example 2: ["EUR/GBP", "CAD/USD", "AUD/USD"]
The favorite currency pairs can be displayed as a list, with each item showing the base currency and target currency separated by a forward slash. When the user clicks on a favorite currency pair, the base and target currency dropdown menus should automatically update to the selected favorite pair.
As an example of how that would look, each favorite currency pair can be displayed as a button within a list item, allowing users to click on them to update the base and target currency dropdown menus accordingly.
Alternatively, you can create another drop-down list that does the same thing. 
You might also have to add some styling to this so that it is clear to the user how to use those.
Error handling:

Handle invalid input by providing informative error messages when users enter invalid amounts, such as negative numbers or non-numeric characters.
Handle API-related errors, such as issues with fetching data or reaching request limits, by displaying an appropriate error message or providing alternative data sources.
Manage edge cases, such as when the base and target currencies are the same, by providing an informative message or handling the situation gracefully.
 

 

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
</head>
<body>
    <h1>Currency Converter</h1>
    <div class="converter">
        <label for="base-currency">Base Currency:</label>
        <select id="base-currency"></select>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" value="1" min="0">
        <label for="target-currency">Target Currency:</label>
        <select id="target-currency"></select>
        <p>Converted Amount: <span id="converted-amount"></span></p>
        <button id="historical-rates">View Historical Rates</button>
        <div id="historical-rates-container"></div>
        <button id="save-favorite">Save Favorite</button>
        <div id="favorite-currency-pairs"></div>
    </div>
</body>
</html>
 

CSS

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

h1 {
    text-align: center;
}

.converter {
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.converter label, .converter select, .converter input {
    display: block;
    margin-bottom: 10px;
}

.converter button {
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
}

.converter button:hover {
    background-color: #2980b9;
}

p {
    margin-top: 20px;
}

#historical-rates-container {
    margin-top: 20px;
}

#favorite-currency-pairs {
    margin-top: 20px;
}
 

 

Helpful Tips:
You must go to the API website and request an API Key. You will need to read through the documentation to decipher how to use the API calls to get through the functionality of your application properly. For this specific API, it will require you to send your API key in the header of your fetch request, which might look something like this:
 

let myHeaders = new Headers();
myHeaders.append("apikey", "Your API Key");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("URL", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 

 

Submission:
Please submit your GitHub repo and the link to your GitHub Pages.

 

Grading Criteria:
Functionality: The application works as described in the requirements and effectively uses JavaScript concepts, such as API fetching, DOM manipulation, handling user input, and implementing additional features.
Code quality: The code is well-organized, easy to read, and follows best practices for JavaScript.
User interface: The application provides a user-friendly experience and integrates seamlessly with the provided HTML and CSS.
Problem-solving: The project demonstrates the student's ability to apply JavaScript knowledge to solve a real-world problem and add value with additional features.