var self = this;

var filtersList = [
  { local: [116.403976,39.910963], name: '人民英雄纪念碑' },
  { local: [116.400239,39.917715], name: '蕙芳园' },
  { local: [116.401245,39.918988], name: '格言亭' },
  { local: [116.400383,39.915806], name: '唐花坞' },
  { local: [116.396646,39.914976], name: '北京第一六一中学' },
  { local: [116.415834,39.908473], name: '首都大酒店' },
  { local: [116.381052,39.905927], name: '宣武门' },
  { local: [116.415762,39.915003], name: '北京饭店' },
  { local: [116.380117,39.922142], name: '灵境胡同' },
  { local: [116.403545,39.924079], name: '故宫博物馆' },
  { local: [116.40333,39.926513], name: '乾清宫' },
  { local: [116.40333,39.928727], name: '神武门' },
  { local: [116.417487,39.921755], name: '王府井北' },
  { local: [116.417056,39.925573], name: '世纪大厦' },
  { local: [116.394634,39.910465], name: '国家大剧院' },
  { local: [116.404081,39.910098] , name: '天安门广场' },
  { local: [116.400238,39.911394] , name: '人民大会堂' },
  { local: [116.400582,39.916702] , name: '中山公园' },
  { local: [116.395486,39.932913] , name: '北海公园' },
  { local: [116.403414,39.924091] , name: '故宫博物馆' }
];
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
      const name = val.regionName();
      let list = filtersList.filter((item) => {
        return item.name.indexOf(name) !== -1;
      });
      console.log('list is--', list);
      if (!list.length) {
        list = [{ name: '没有匹配到地点' }];
      }
      if (!name) {
        list = self.defaultList;
      }
      setTimeout(function(){
        val.regionList(list);
        self.initMark();
      },100);
    },
    showHide: function(val) {
      val.menuVisible(!val.menuVisible());
    }
};
ko.applyBindings(model);
