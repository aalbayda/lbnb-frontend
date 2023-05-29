const axios = require("axios");
const url = "https://mockup-backend-128.herokuapp.com";
axios
  .post(url + "/get-user-accommodations", {
    ownerName: "owner1@example.com",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// axios.post(url+'/filter-accommodation', {
//     filters: {
//         name: '',
//         address: '',
//         location: '',
//         type: '',
//         priceFrom: '',
//         priceTo: '',
//         capacity: ''
//     }
//   })
//   .then(function (response) {
//     console.log(response.data);
//     console.log(response.message);
//     console.log(response.accommodations);
//   })
//   .catch(function (error) {
//     console.log("Error!!!");
//     console.log(error);
//   });
