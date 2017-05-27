
class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
    this.messageObjects = [];
    // this.messagesByUserName = {};
    this.init();
  }
  init() {
    //starts something here
    this.fetch();
  }


  send(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        //handle escaping out the message to prevent from xss it should happen here
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      data: {},
      contentType: 'application/json',
      success: function (data) {
        for (let i in data.results) {
          //grab the elements I want and santatize them
          let messageData = {'username': Sanitize(data.results[i].username), 'roomname': Sanitize(data.results[i].roomname),
            'text': Sanitize(data.results[i].text)
          };
          debugger;
          if (messageData.username || messageData.roomname || messageData.text) {
            app.messageObjects.push(messageData);
          }
          app.renderAllMessages();
        }
        //Supply the data request back
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
  clearMessages() {
    let $messages = $(`<div id='chats'></div>`);
    var node = document.getElementById('chats');
    node.parentElement.removeChild(document.getElementById('chats'));
    document.body.appendChild($messages[0]);
  }

  renderRoom(room) {
    let $roomTemplate = $(`<option value="${room}">${room}</option>`);
    document.getElementById('roomSelect').appendChild($roomTemplate[0]);
  }

  makeMessageInstance(userName, messageText) { // TO DO:
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
}



var app = new App();
