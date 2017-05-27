class AppEvents {
  constructor() {
    this.connectEventHandlers();
  }

  connectEventHandlers() {
    this.createRefreshEventHandler();
    this.createSendMessageEventHandler();
    this.createRoomSelectorEventHandler();
    this.createNewRoomEventHandler();
  }

  createRefreshEventHandler() {
    $( '#refresh' ).click(function() {
      app.fetch();
    });
  }

  createRoomSelectorEventHandler() {
    $( '#roomSelect' ).change(function() {
      app.renderAllMessages();
      // alert( 'Handler for .change() called.' );
    });
  }

  createSendMessageEventHandler() {
    $( '#send' ).click(function() {
      let currentUserName = window.location.search.substring(10);
      let currentRoomName = app.getCurrentRoom();
      let text = document.getElementById('messageInput').value;

      var message = {username: currentUserName,
                     roomname: currentRoomName,
                     text: text};
      console.log(message);
      app.send(message);
    });
  }

  createNewRoomEventHandler() {
    $( '#addNewRoom' ).click(function() {
// debugger;
      let newRoom = document.getElementById('newRoomInput').value;
      let roomDropDown = document.getElementById('roomSelect');
      app.existingRooms.add(newRoom);

      app.renderAllRooms(newRoom);
// document.getElementById('roomSelect').children[index].attributes.value.nodeValue
//      let lastRoom = document.getElementById('roomSelect').children.length-1
//      roomDropDown.selectedIndex = lastRoom;

      // set current room to new room
      var sortedRoomsList = Array.from(app.existingRooms).sort();
      roomDropDown.selectedIndex = sortedRoomsList.indexOf(newRoom);

    });
  }

  createAddFriendEventHandler() {
    
  }

}

let appEvents = new AppEvents();









