const btn = document.querySelector('#submit');
btn.addEventListener('click', submit);

function submit(e) {
  console.log('submit');
  let data = getFromData();
  console.log(data);
  let prompt = createPrompt(data);
  console.log(prompt);
  sendtoAPI(prompt);
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
  let prompt = `I am a ${data.from} and want to start a ${data.tone} and engaging conversation with a ${data.to} that I see in a ${data.location}. She/he speaks ${data.language} and is around ${data.age} years old. Please come up with three short and catchy conversation starters ( i will pick the one I like best). Return as json {
  "choices": [converstation starter1, conversation starter2, conversation starter3]
  } return:`;
  return prompt;
}

function sendtoAPI(prompt) {
  console.log('Request sent to API');
  fetch('https://chit-chat-production.up.railway.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayData(data) {
  let output = data.response;
  // text to json
  let json = JSON.parse(output).choices;
  console.log(json);

  document.getElementById('r1').innerHTML = json[0];
  document.getElementById('r2').innerHTML = json[1];
  document.getElementById('r3').innerHTML = json[2];
}
