const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error !== null) {
    console.log(error.code === 'ENOTFOUND' ? "Page not found" : error);
    return;
  }
  const data = JSON.parse(body);

  console.log(data[0] === undefined ? "Data not found" : data[0].description);
});