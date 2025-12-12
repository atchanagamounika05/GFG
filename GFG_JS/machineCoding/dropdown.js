const selectCountry = document.querySelector(".container");
const countryContainer = document.querySelector(".country-container");
const countryList = document.querySelector(".country-list");
const input = document.querySelector(".input");

const countries = [
  { id: 1, country: "America" },
  { id: 2, country: "Afganisthan" },
  { id: 3, country: "Africa" },
  { id: 4, country: "Bulgaria" },
  { id: 5, country: "China" },
  { id: 6, country: "England" },
  { id: 7, country: "India" },
  { id: 8, country: "Indonesia" },
  { id: 9, country: "Japan" },
];

function showCountries(countries) {
  for (let country of countries) {
    let name = document.createElement("p");
    name.classList.add("name");
    name.innerText = country.country;
    countryList.appendChild(name);
  }
}

showCountries(countries);
function handleClick(e) {
  searchValue = e.target.value.toLowerCase();
  const filterBySearch = countries.filter(({ country }) =>
    country.toLowerCase().startsWith(searchValue)
  );
  countryList.innerHTML = "";
  showCountries(filterBySearch);
}

input.addEventListener("keyup", handleClick);

selectCountry.addEventListener("click", () => {
  console.log("hai");
  countryContainer.classList.toggle("hide");
});
