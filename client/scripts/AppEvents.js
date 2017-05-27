class AppEvents {
  constructor() {
    this.connectEventHandlers();
  }

  connectEventHandlers() {
    this.createRefreshEventHandler();
    //this.createSendMessageEventHandler();
    this.createRoomSelectorEventHandler();
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

  // createSendMessageEventHandler() {
  //   $( '#send' ).click(function() {
  //     let text = document.getElementById('messageInput');
  //   });
  // }  
}

let appEvents = new AppEvents();