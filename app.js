var self = this;

var defaultList = [
    { local: [116.404081,39.910098] , name: '天安门广场' },
    { local: [116.400238,39.911394] , name: '人民大会堂' },
    { local: [116.400582,39.916702] , name: '中山公园' },
    { local: [116.395486,39.932913] , name: '北海公园' },
    { local: [116.403414,39.924091] , name: '故宫博物馆' }
];
var defaultList1 = [
    { local: [116.395486,39.932913] , name: '北海公园' },
    { local: [116.403414,39.924091] , name: '故宫博物馆' }
];

var model = {
    regionName: ko.observable(),
    regionList: ko.observableArray(this.defaultList),
    infoWindow: ko.observable(),
    tips: ko.observable(""),
    menuVisible: ko.observable(true),
    changeRegionList: function(val) {
        console.log('changeRegionList come in', val);
        model.regionList([val]);
        self.initMark();
    },
    doSearch: function(val) {
      self.doSearch(val.regionName);
    },
    showHide: function(val) {
      val.menuVisible(!val.menuVisible());
      console.log('====showHide', val.menuVisible());
      
    }

};
ko.applyBindings(model);
