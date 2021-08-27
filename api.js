const getCountries = () =>
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

getCountries();

displayCountries = countries => {
    const slelection = document.getElementById('options');
    countries.forEach(country => {
        const option = document.createElement('div');
        option.innerHTML =
            `<p class="country" onclick="getCountry('${country.name}')"> ${country.name}</p>`

        slelection.appendChild(option);
    })
}

const getCountry = country => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryInfo(data))
}

const countryInfo = data => {
    const country = data[0];
    document.getElementById('country-info').innerHTML = `
        <h2> ${country.name} <small style='color: green'> - Native Name: ${country.nativeName} </small></h2>
        <img src='${country.flag}' width="300px">
        <p>Region: ${country.region}</p>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital}</p>
        <h5>Borders: ${country.borders} </h5>
        <p>Currencie: ${country.currencies[0].name} </p>
    `

}











