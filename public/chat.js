const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback') ;

//Emit Events
btn.addEventListener('click', () => {
    console.log("button clicked");
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
    message.value= "";
})

//Listen for events
socket.on('chat', data => {
    console.log('chat data received from server: ', data);
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
