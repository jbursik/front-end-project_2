const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];
const populationTotal = 8000000000;

function countryPercent(population, populationTotal) {
  const result = ((population / populationTotal) * 100).toFixed(2);
  return result;
}
//console.log(countryPercent(countriesPopulation[0].population, populationTotal));
//console.log(countriesPopulation.length);

const copyCountries = JSON.parse(JSON.stringify(countriesPopulation));

copyCountries.sort((a, b) => a.population - b.population);
//console.log(copyCountries);

copyCountries.forEach((element, index) => {
  element.id = element.country.slice(0, 3) + index;
});
//console.table(copyCountries);

copyCountries.forEach((element) => {
  element.percentage = countryPercent(element.population, populationTotal);
});
// console.log(copyCountries);

function filterCountries(e) {
  return (
    e.country.length > 4 &&
    e.country.length <= 8 &&
    e.percentage > 1.5 &&
    e.percentage < 10
  );
}
const filteredCountries = copyCountries.filter(filterCountries);

//console.log(filteredCountries);
