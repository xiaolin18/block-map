var map;

var mapTimeout = setTimeout(function() {
    model.tips("地图加载超时");
}, 5000);

function initmap() {
    window.clearTimeout(mapTimeout);
    map = new BMap.Map("map-content");    // 创建Map实例
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);

    var options = {renderOptions: {map: map, panel: "results"}};
    var myLocalsearch = new BMap.LocalSearch(map,options);
    this.initMark();
}

// 初始化标记
function initMark() {
    this.clearMark();
    var self = this;
    const regionList = model.regionList();
    if (!regionList[0].local) {
      return;
    }
    for(var i=0;i<regionList.length;i++){
        var marker = new BMap.Marker(new BMap.Point(regionList[i].local[0],regionList[i].local[1]));  // 创建标注
        var content = regionList[i].name;
        map.addOverlay(marker);               // 将标注添加到地图中
        this.addClickHandler(content,marker);
        if (regionList.length === 1) {
          marker.setAnimation(BMAP_ANIMATION_BOUNCE);
          this.createInfo(content, marker, self);

        }
    }
}

// 添加点击事件
function addClickHandler(content, marker){
    const self = this;
    marker.addEventListener("click", function (e) {
    var url = "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=" + content + "&bk_length=600";
    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(result) {
        self.openInfo(result.abstract, e);
        },
        error: function() {
        self.openInfo("fail", e);
        }
    });
});
}

// 添加信息窗口
function openInfo(content,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口
}

// 直接创建信息窗口
function createInfo(content, position, self) {
  var point = new BMap.Point(position.getPosition().lng, position.getPosition().lat);
  var url = "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=" + content + "&bk_length=600";
  $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(result) {
      var infoWindow = new BMap.InfoWindow(result.abstract);  // 创建信息窗口对象
      map.openInfoWindow(infoWindow, point); //开启信息窗口

      },
      error: function() {
      self.openInfo("fail", e);
      }
  });
}

// 清空覆盖物
function clearMark() {
    const allOverlay = map.getOverlays();
    for(var i = 0;i<allOverlay.length;i++) {
        if(allOverlay[i].toString()=="[object Marker]"){
            map.removeOverlay(allOverlay[i]);
        }
    }
}
