
//search all countries button
function allCountriesButton() {
    const countryUrl = 'https://restcountries.com/v3.1/all';
    fetchCountries(countryUrl);
}

//search button by key word
function searchButton() {
    let typeWord = `https://restcountries.com/v3.1/name/${document.querySelector('#searchFieldValue').value}`;
    fetchCountries(typeWord);
}

// fetch countries from API
function fetchCountries(countryUrl) {
    fetch(countryUrl)
        .then(response => response.json())
        .then(allCountries => numberOfCountries(allCountries))

}


// present number of countries
function numberOfCountries(allCountries) {

    document.querySelector('#no_of_countries').innerHTML =
        `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Number of Countries:</div>
<div class="card-body">
  <h5 class="card-title">${allCountries.length}</h5>
</div>
</div>`

    sumPopulation(allCountries);
    countriesTable(allCountries);
}


// present population Sum
function sumPopulation(sumAllCountriesPopulation) {
    let sum = 0
    for (let i = 0; i < sumAllCountriesPopulation.length; i++) {
        sum += sumAllCountriesPopulation[i].population
    }


    document.querySelector('#countries_sum_population').innerHTML =
        `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Total Countries Population:</div>
    <div class="card-body">
    <p class="card-title">${sum}</p>
    </div>
    </div>`

    avePopulation(sum, sumAllCountriesPopulation.length)

}


// present population Average
function avePopulation(sum, countriesNumber) {

    const countriesAve = sum / countriesNumber;

    document.querySelector('#average_population').innerHTML =
        `<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Average Population Number:</div>
    <div class="card-body">
    <p class="card-title">${countriesAve}</p>
    </div>
    </div>`
}

// country currency
function presentCurrencies(currencies){
    let currency = "";
    for(const currencyOfCurrencies in currencies) {
        currency += currencyOfCurrencies;
    }
    return currency;
}


// countries Table
function countriesTable(allCountriesArray) {
    let table = document.querySelector('#present-info');

    let htmlTableHead = `<table>
                    <tr>
                        <th>Country Name</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Currency</th>
                        <th>Flag</th>
                    </tr>
                    
    ${allCountriesArray.map(tableInfo =>
        `<tr>
                <td>${tableInfo.name.common}</td>
                <td>${tableInfo.region}</td>
                <td>${tableInfo.population}</td>
                <td>${presentCurrencies(tableInfo.currencies)}</td>
                <td>${tableInfo.flag}</td>
        </tr>`
    )}
        </table>`

    table.innerHTML = htmlTableHead;
};