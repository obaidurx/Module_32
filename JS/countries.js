const loadCountries = ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>res.json())
    .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries=>{
    const countryDiv= document.getElementById('countries')
    countries.forEach(country=>{
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML =`
       <h3> Country: ${country.name} </h3> 
       Capital: ${country.capital}   
       Number Code: ${country.numericCode}   
       Population: ${country.population} 
       
       <button onclick="loadCountryName('${country.name}')">Details</button>
       `;
        countryDiv.appendChild(div);   
    });

}
    const loadCountryName = name=>{
        const url = `https://restcountries.eu/rest/v2/name/${name};`
        fetch(url)
        .then(res=>res.json())
        .then(data =>displayCountryDetails(data[0]))
  
        const displayCountryDetails= country=>{
            const displayCountryDetail = document.getElementById('details')
            // const displayDiv = document.createElement('div');
            console.log(country);
            displayCountryDetail.innerHTML=`
            <h2> ${country.name} </h2>
            <p> Capital: ${country.capital} </p>
            <p> Population: ${country.population} </p>
            <img src="${country.flag}" width="250">
            `
            // displayCountryDetail.appendChild(displayDiv);
        }
}