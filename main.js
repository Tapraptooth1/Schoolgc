function sendMessage() {
    const message = document.getElementById('message-input').value.trim();
    if (message !== '') {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `${name ? `<span style="color: green">${name}</span>` : 'Anonymous'}: ${message}`;
        chatMessages.appendChild(messageElement);
        document.getElementById('message-input').value = ''; // Clear message input after sending
    }
}
