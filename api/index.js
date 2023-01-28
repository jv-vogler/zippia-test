const app = require('express')();
const axios = require('axios');
const cors = require('cors');
app.use(cors());

const payload = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: 'Business Analyst',
  locations: [],
  numJobs: 20,
  previousListingHashes: [],
};

// Makes the request at this endpoint. I had to use the "api" folder to make it work on Vercel
app.get('/api/test/jobs', (req, res) => {
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

module.exports = app;
