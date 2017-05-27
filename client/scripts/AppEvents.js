class AppEvents {
  constructor() {
    this.connectEventHandlers();
  }

  connectEventHandlers() {
    this.createRefreshEventHandler();

  }

  createRefreshEventHandler() {
    $( '#refresh' ).click(function() {
      app.fetch();
    });
  }  

  createRefreshEventHandler() {
    $( '#send' ).click(function() {
      let text = document.getElementById('messageInput');
      debugger;
    });
  }  
}

let appEvents = new AppEvents();