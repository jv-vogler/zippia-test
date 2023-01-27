const express = require('express');
const axios = require('axios');
const app = express();

const payload = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: 'Business Analyst',
  locations: [],
  numJobs: 20,
  previousListingHashes: [],
};

// Creates an express route to send the data back to the client
app.get('/test/jobs/', (req, res) => {
  axios
    .post('https://www.zippia.com/api/jobs/', payload)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

// Starts the express server on port 5000
app.listen(5000, () => console.log('Server started on port 5000'));
