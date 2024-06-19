const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Connect to the WebSocket server
const socket = io();

// Listen for incoming messages
socket.on('message', message => {
    displayMessage(message);
});

// Send a message when the send button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
});

// Display a message in the chat container
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Send a message to the server
function sendMessage(message) {
    socket.emit('message', message);
}
