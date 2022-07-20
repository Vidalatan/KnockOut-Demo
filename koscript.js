function testViewModel(){
  const self = this;

  self.navLinks = ['Home', 'About', 'Contact', 'Resume']

  self.currentWindow = ko.observable('#!')
  self.counter = ko.observable(0)
  self.navClicked = ko.observable(false)

  self.navClick = function(e) {
    const l = e === 'Home' ? `#!` : `#!${e.toLowerCase()}`;
    (self.navClicked() || self.navClicked(true));
    window.history.pushState({}, '', `index.html${l}`);
    self.currentWindow(l);
  }

  self.watchWindow = function(){
    window.addEventListener('popstate', (e) => self.currentWindow(e.target.location.href.slice(e.target.location.href.indexOf('#!'))))
  }

  self.watchWindow()
}

ko.applyBindings(new testViewModel());