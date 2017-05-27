
class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
    this.messageObjects = [];
    this.existingRooms = new Set();
    this.init();
  }
  init() {
    this.fetch();
  }


  send(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message!', data);
      }
    });
  }

  fetch() {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: {order:'-createdAt', limit: 500},
      contentType: 'application/json',
      success: function (data) {
        app.clearMessages();
        for (let i = 0; i < data.results.length; i++) {
          let messageData = {'username': Sanitize(data.results[i].username), 'roomname': Sanitize(data.results[i].roomname),
            'text': Sanitize(data.results[i].text)
          };
          if (messageData.roomname) {
            app.existingRooms.add(messageData.roomname.toLowerCase());
          }
          if (i < 100) {
            if (messageData.username || messageData.roomname || messageData.text) {
              app.messageObjects.push(messageData);
            }
          }
        }
        app.renderAllMessages();
        app.renderAllRooms();
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
  clearMessages() {
    this.messageObjects = [];
    $(document.getElementById('chats')).empty();
  }

  renderRoom(room) {
    let $roomTemplate = $(`<option value="${room}">${room}</option>`);
    document.getElementById('roomSelect').appendChild($roomTemplate[0]);
  }

  renderMessage(message) {
// TO DO: USE THE 'escape.js' SCRIPT BEFOREHAND
    const $messageElement = $(
      `<div class="message">
         <h3 class="messageUser"> ${message.username} </h3>
         <p class="messageText"> ${message.text} </p>
       </div>}`);

    document.getElementById('chats').appendChild($messageElement[0]);
  }

  renderAllMessages() {
    for (let i in this.messageObjects) {
      this.renderMessage(this.messageObjects[i]);
    }
  }
  renderAllRooms() {
    for (let item of this.existingRooms) {
      console.log(item);
      //this.renderMessage(this.messageObjects[i]);
    }
  }
}



var app = new App();
