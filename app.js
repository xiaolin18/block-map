var viewModel = function() {
  this.regionName = ko.observable('');
  this.regionList = ko.observableArray(['12222', '4444', '6666']);
};

ko.applyBindings(new viewModel());
