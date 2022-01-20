const fetchBreedDescription = require("./breedFetcher");

fetchBreedDescription('Siberian', (error, description) => {
  if (error) {
    console.log("error:", error);
  } else  console.log("desc:", description);
}); 