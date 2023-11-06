// backend/server.js
require('dotenv').config();
const express = require('express');
const request = require('request'); // You can use Axios if you prefer
const app = express();

app.use(express.json()); // For parsing application/json

// Endpoint to post a link to a Facebook Page
app.post('/postToFacebook', (req, res) => {
  const { accessToken, pageId, message } = req.body;

  // Make a POST request to the Facebook Graph API
  request({
    url: `https://graph.facebook.com/v12.0/${pageId}/feed`,
    method: 'POST',
    qs: {
      access_token: accessToken,
      message: message,
    },
  }, (error, response, body) => {
    if (error) {
      console.error('Error posting to Facebook:', error);
      return res.status(500).send('Error posting to Facebook');
    }
    res.status(200).send(body);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
