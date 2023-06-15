// const configuration = new openai.Configuration({
//   apiKey: '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',
//   organizationId: 'org-okTBXgLzxiz6NrxXrbvZkvK2',
// });

// const openai = new openai.OpenAIApi(configuration);

// // Función para enviar una solicitud al chatbot
// async function sendMessage(message) {
//   const response = await openai.createCompletion({
//     engine: 'text-davinci-003', // Cambia el motor si es necesario
//     prompt: 'You are a helpful assistant.\nUser: ' + message + '\n',
//     maxTokens: 100,
//     temperature: 0.6
//   });

//   // Obtener la respuesta del chatbot
//   const reply = response.choices[0].text;

//   // Mostrar la respuesta en la página web
//   displayMessage(reply.trim());
// }

// // Función para mostrar los mensajes en la página web
// function displayMessage(message) {
//   const chatContainer = document.getElementById('chat-container');
//   const messageElement = document.createElement('p');
//   messageElement.innerText = message;
//   chatContainer.appendChild(messageElement);
// }

// // Obtener el formulario de entrada y agregar un evento de envío
// const form = document.getElementById('chat-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const input = document.getElementById('user-input');
//   const message = input.value;
//   input.value = '';
//   displayMessage(message);
//   sendMessage(message);
// });
