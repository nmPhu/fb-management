// api/postToFacebook.js

const request = require('request');

module.exports = (req, res) => {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
