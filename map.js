
// 百度地图API功能
var map = new BMap.Map("content");    // 创建Map实例
     //添加地图类型控件
     map.addControl(new BMap.MapTypeControl({
         mapTypes:[
             BMAP_NORMAL_MAP,
             BMAP_HYBRID_MAP
         ]}));	  
     map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
     
     map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);

    var data_info = [
        [116.404081,39.910098,"地址：天安门广场"],
        [116.400238,39.911394,"地址：人民大会堂"],
        [116.400582,39.916702,"地址：中山公园"],
        [116.395486,39.932913, "地址：北海公园"],
        [116.403414,39.924091, "地址：故宫博物馆"]
    ];
    for(var i=0;i<data_info.length;i++){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
    }
    function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
    }

    var options = {renderOptions: {map: map, panel: "results"}};
    var myLocalsearch = new BMap.LocalSearch(map,options);
    function fun_search(){
        console.log('========');
        
        // var value_keyword_1 = document.getElementById("keyword_1").value;
        // myLocalsearch.search(value_keyword_1);
    }
    

    // function G(id) {
	// 	return document.getElementById(id);
	// }
    // var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
	// 	{"input" : "suggest"
	// 	,"location" : map
	// });

	// ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	// var str = "";
    //     var _value = e.fromitem.value;
        
	// 	var value = "";
	// 	if (e.fromitem.index > -1) {
	// 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	}    
	// 	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
	// 	value = "";
	// 	if (e.toitem.index > -1) {
	// 		_value = e.toitem.value;
	// 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	}    
	// 	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
	// 	G("searchResultPanel").innerHTML = str;
	// });

	// var myValue;
	// ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	// var _value = e.item.value;
	// 	myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
	// 	setPlace();
	// });

	// function setPlace(){
	// 	map.clearOverlays();    //清除地图上所有覆盖物
	// 	function myFun(){
	// 		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
	// 		map.centerAndZoom(pp, 18);
	// 		map.addOverlay(new BMap.Marker(pp));    //添加标注
	// 	}
	// 	var local = new BMap.LocalSearch(map, { //智能搜索
	// 	  onSearchComplete: myFun
	// 	});
	// 	local.search(myValue);
	// }
    
     