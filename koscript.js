function testViewModel(){
  const self = this;

  self.counter = ko.observable(0)
  
  self.increase = function(){
    this.counter(this.counter()+1)
  }
  self.decrease = function(){
    this.counter(this.counter()-1)
  }

}

ko.applyBindings(new testViewModel());