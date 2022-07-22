function testViewModel(){
  const self = this;

  self.navLinks = ['Home', 'About', 'Contact', 'Resume']

  self.currentWindow = ko.observable('#!')
  self.counter = ko.observable(0)
  self.navClicked = ko.observable(false);
  self.restrictHome = ko.observable(true);
  self.lstMsg = ko.observable(false)
  self.progMsg = ko.observable('Thought you would see the same message still? Nope. Also, have you tried using the back or forward buttons on your browser yet? Give it a try!')

  self.navClick = function(e) {
    const l = e === 'Home' ? `#!` : `#!${e.toLowerCase()}`;
    (l === '#!' || self.navClicked() || self.navClicked(true));
    window.history.pushState({}, '', `index.html${l}`);
    self.currentWindow(l);
  }

  self.watchWindow = function(){
    window.addEventListener('popstate', (e) => {
      if(self.navClicked() === true) self.lstMsg() ? self.progMsg(`As you can see, the back and forward buttons work normally as 
      you\'d expect. This is a result of listening to the popstate event from the window and pushing certain url locations to the 
      history, while also setting conditional rendering depending on the url. This makes it look like we are changing pages, and allows 
      for the url to be manipulated appropriately by the forward and back buttons, but in fact this is still just a single page website. 
      
      Stay tuned, there will be more content to come!`) : self.lstMsg(true);
      self.currentWindow(e.target.location.href.slice(e.target.location.href.indexOf('#!')))
    })
  }

  self.watchWindow()
}

ko.applyBindings(new testViewModel());