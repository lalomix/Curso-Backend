const socket = io();

let userChat = document.getElementById('userChat')
let mensajesChat = document.getElementById('mensajesChat')

let submit = document.getElementById('submit')


submit.addEventListener('click', (evt) => {
    socket.emit("message", {
      email: userChat.value,
      message: mensajesChat.value,
             
    });

})

  socket.on('chatHistory', data => {
      if (data.length > 0) {
          let chatHistory = document.getElementById('chatHistory')
          let html = ''
          data.forEach(message => {
              html += `
              <div>
                  <span style="color: blue; font-weight: bold">${message.userChat}</span>
                  <span style="color: red">[${message.date}]: </span>
                  <span style="color: green">${message.mensajesChat}</span>
              </div>
              `
          })
          chatHistory.innerHTML = html
      }
  })

 