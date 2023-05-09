const axios = require("axios");
const url = 'https://mockup-backend-128.herokuapp.com';

axios.post(url+'/filter-accommodation', {
    filters: {
        name: '',
        address: '',
        location: '',
        type: '',
        priceFrom: '',
        priceTo: '',
        capacity: ''
    }
  })
  .then(function (response) {
    console.log(response.data);
    console.log(response.message);
    console.log(response.accommodations);
  })
  .catch(function (error) {
    console.log("Error!!!");
    console.log(error);
  });