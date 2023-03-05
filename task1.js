// 1)
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

let checkCountry = function (country, countries) {
  if (typeof country != "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }

  console.log(
    countries.includes(country)
      ? `Zadaná krajina ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(
          country
        )}`
      : `Zadaná krajina ${country} se nenachází v seznamu krajin.`
  );
};
//console.table(countries);
/*
checkCountry("Germany", countries);
checkCountry("Japan", countries);
checkCountry(1000, countries);
*/

// 2)
let addCountry = function (country, countries) {
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }

  if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajn na indexu: ${countries.indexOf(
        country
      )}`
    );
  } else {
    countries.push(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Celkový počet krajin v seznamu je ${countries.length}`
    );
  }
};
/*
console.table(countries);
addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);
console.table(countries);
*/

// 3)
let removeCountry = function (country, countries) {
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatn dotaz: ${country}`);
    return;
  }

  if (countries.includes(country)) {
    const countryIndex = countries.indexOf(country);
    countries.splice(countryIndex, 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněná ze seznamu krajin na indexu ${countryIndex}. Aktuální počet krajin v seznamu je ${countries.length}`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
};

//console.table(countries);
/*
removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
console.table(countries);
*/
