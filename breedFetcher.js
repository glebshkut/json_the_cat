const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      return error;
    }
    const data = JSON.parse(body);
    
    callback(error, data[0].description);
  });
};

module.exports = fetchBreedDescription;