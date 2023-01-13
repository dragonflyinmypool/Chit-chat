const btn = document.querySelector('#submit');
btn.addEventListener('click', submit);

const apiKey = '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';

function submit(e) {
  console.log('submit');
  let data = getFromData();
  console.log(data);
  let prompt = createPrompt(data);
  console.log(prompt);
  sendtoAPI(prompt, apiKey);
}

function getFromData() {
  let tone = document.getElementById('tone').value;
  let from = document.getElementById('From').value;
  let to = document.getElementById('To').value;
  let location = document.getElementById('Location').value;
  let language = document.getElementById('Language').value;
  let age = document.getElementById('Age').value;

  // create object to send
  let data = {
    tone: tone,
    from: from,
    to: to,
    location: location,
    language: language,
    age: age,
  };
  return data;
}
function createPrompt(data) {
  let prompt = `I am a ${data.from} and want to start a ${data.tone} and engaging conversation with a ${data.to} that I see in a ${data.location}. She/he speaks ${data.language} and is around ${data.age} years old. Please come up with three short and catchy conversation starters ( i will pick the one I like best):`;
  return prompt;
}

function sendtoAPI(prompt, apiKey) {
  console.log(apiKey);
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 300,
      temperature: 1,
    }),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      let output = data.choices[0].text;
      console.log(output);
      document.getElementById('results').innerHTML = output;
    })
    .catch((error) => {
      console.log(error);
    });
}
