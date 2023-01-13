require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const axios = require('axios');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

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
    const responseObject = {
      response: realResponse,
    };

    return responseObject;
  } catch (error) {
    return error;
  }
}

app.use(express.json());

app.post('/', async (req, res) => {
  const requestBody = req.body.prompt;
  const realResponse = await sendtoAPI(requestBody, apiKey);
  res.send(realResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
