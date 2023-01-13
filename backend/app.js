require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const apiKey = process.env.apiKey;

async function sendtoAPI(requestBody, apiKey) {
  try {
    console.log('request: ' + requestBody);
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/completions',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      data: {
        model: 'text-davinci-003',
        prompt: requestBody,
        max_tokens: 500,
        temperature: 1,
      },
    });
    console.log('request sent');

    const realResponse = response.data.choices[0].text;
    return realResponse;
  } catch (error) {
    return error;
  }
}

app.use(express.json());

app.post('/', async (req, res) => {
  const requestBody = req.body.message;
  const realResponse = await sendtoAPI(requestBody, apiKey);
  res.send(realResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
