
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
      data: {order:'-createdAt', limit: 800},
      contentType: 'application/json',
      success: function (data) {
        app.messageObjects = [];
        for (let i = 0; i < data.results.length; i++) {
          let messageData = {'username': Sanitize(data.results[i].username), 'roomname': Sanitize(data.results[i].roomname),
            'text': Sanitize(data.results[i].text)
          };
          if (messageData.roomname) {
            app.existingRooms.add(messageData.roomname.toLowerCase());
          }
          if (messageData.username || messageData.roomname || messageData.text) {
            app.messageObjects.push(messageData);
          }
        }
        app.renderAllRooms();
        app.renderAllMessages();
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
  clearMessages() {
    $(document.getElementById('chats')).empty();
  }

  renderRoom(room) {
    let $roomTemplate = $(`<option class="roomOption" value="${room}">${room}</option>`);
    document.getElementById('roomSelect').appendChild($roomTemplate[0]);
  }

  renderAllRooms() {
    for (let item of this.existingRooms) {
      this.renderRoom(item);
    }
  }

  renderMessage(message) {
    const $messageElement = $(
      `<div class="message">
         <h3 class="messageUser"> ${message.username} </h3>
         <p class="messageText"> ${message.text} </p>
       </div>}`);

    document.getElementById('chats').appendChild($messageElement[0]);
  }

  getCurrentRoom() {
    let roomDropDown = document.getElementById('roomSelect');
    let roomIndex = roomDropDown.selectedIndex;
    return roomDropDown.children[roomIndex].value;
  }
  
  renderAllMessages() {
    this.clearMessages();
    debugger;
    let currRoom = this.getCurrentRoom();
    for (let i = 0; i < this.messageObjects.length; i++) {
      if (this.messageObjects[i].roomname === currRoom) {
        this.renderMessage(this.messageObjects[i]);
      }
    }
  
  }

}



var app = new App();
