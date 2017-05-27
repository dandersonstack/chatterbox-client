
class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';

  }
  init() {
    //starts something here
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
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
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
    let $messageElement = $(
      `<div class="message">
         <h3 class="messageUser"> ${message.username} </h3>
         <p class="messageText"> ${message.text} </p>
       </div>}`);

    document.getElementById('chats').appendChild($messageElement[0]);
  }

  _renderMessages(AllTheMessages) {
  // INIT VARIABLE TO REFER TO DESIRED DOM NODE
  // INIT MESSAGE ELEMENT TEMPLATE
    // ITERATE OVER MESSAGE ARRAY (WHICH WE RECEIVED FROM THE SERVER)
      // APPEND EACH ELEMENT TO CORRECT DOM NODE (WRAPPED IN THE MESSAGE ELEMENT TEMPLATE)
  }

}



var app = new App();

// - COMPLETE 'FETCH' METHOD...
// - BUILD OUT HTML ELEMENTS AND HOW TO POPULATE THEM WITH THE DATA
// - UNDERSTAND HOW THOSE ELEMENTS ARE TO BE REPEATED

// -
