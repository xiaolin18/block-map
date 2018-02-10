
// // 百度地图API功能
// var map = new BMap.Map("content");    // 创建Map实例

// 	var geolocation = new BMap.Geolocation();
// 	geolocation.getCurrentPosition(function(r){
// 		if(this.getStatus() == BMAP_STATUS_SUCCESS){
// 			map.panTo(r.point);
// 		}
// 		else {
// 			alert("定位失败： "+this.getStatus());
// 		}
// 		loadData(viewModel.regionList);
// 	},{enableHighAccuracy: true});
// 	convert(new BMap.Point(116.417854,39.921988), function(data) {
// 		//set Map
// 		map.centerAndZoom(data.points[0], 17);  // 初始化地图,设置中心点坐标和地图级别
// 		map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
// 		map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
// 		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
// 		// loadData(model.items);
// 	});

//      //添加地图类型控件
//      map.addControl(new BMap.MapTypeControl({
//          mapTypes:[
//              BMAP_NORMAL_MAP,
//              BMAP_HYBRID_MAP
//          ]}));	  
//      map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
     
//      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//     // map.centerAndZoom(new BMap.Point(116.417854,39.921988), 15);

//     var data_info = [
//         [116.404081,39.910098,"地址：天安门广场"],
//         [116.400238,39.911394,"地址：人民大会堂"],
//         [116.400582,39.916702,"地址：中山公园"],
//         [116.395486,39.932913, "地址：北海公园"],
//         [116.403414,39.924091, "地址：故宫博物馆"]
//     ];
//     for(var i=0;i<data_info.length;i++){
//         var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
//         var content = data_info[i][2];
//         map.addOverlay(marker);               // 将标注添加到地图中
//         addClickHandler(content,marker);
//     }
//     function addClickHandler(content,marker){
// 		marker.addEventListener("click",function(e){
// 			openInfo(content,e)}
// 		);
//     }
//     function openInfo(content,e){
// 		var p = e.target;
// 		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
// 		var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 
// 		map.openInfoWindow(infoWindow,point); //开启信息窗口
//     }

//     var options = {renderOptions: {map: map, panel: "results"}};
//     var myLocalsearch = new BMap.LocalSearch(map,options);
	
// 	function convert(point,cb) {
// 		var convertor = new BMap.Convertor();
// 		var pointArr = [];
// 		pointArr.push(point);
// 		convertor.translate(pointArr,3,5,cb);
// 	}

// 	function loadData(items) {
// 		console.log('items is--', items);
		
// 		map.clearOverlays();
// 		// items.removeAll();
// 		var options = {      
// 			pageCapacity: 10,
// 			onSearchComplete: onSucess
// 		};      
// 		var local = new BMap.LocalSearch(map, options);
// 		local.searchInBounds("公交站",map.getBounds());
// 		function onSucess(results) {
// 			if (local.getStatus() == BMAP_STATUS_SUCCESS){
// 				// 判断状态是否正确      
// 				setMarker(results);
// 				var nextPage = results.getPageIndex()+1;
// 				if(nextPage < results.getNumPages())
// 					local.gotoPage(nextPage);
// 			}
// 		}
// 		function setMarker(results) {
// 			var curPosi;
// 			for (var i = 0; i < results.getCurrentNumPois(); i++){      
// 				// s.push(results.getPoi(i).title + ", " + results.getPoi(i).address); 
// 				curPosi = results.getPoi(i);
	
// 				var marker = new BMap.Marker(curPosi.point);
// 				marker.title = curPosi.title;
// 				marker.visible = true;
// 				marker.selected= false;
// 				marker.stationInfo = curPosi.address;
// 				marker.position = curPosi.point;
// 				marker.open = false;
				
// 				// marker.setTitle(curPosi.title);
// 				// marker.setLabel(new BMap.Label(curPosi.title).setStyle({display:"none"}));
// 				marker.addEventListener("click",marker.toggleWindow);
// 				marker.addEventListener("mouseover",marker.showLabel);
// 				marker.addEventListener("mouseout",marker.setNormal);
// 				marker.addEventListener("infowindowclose",marker.setWindowClose);
// 				// items.push(marker);
// 				map.addOverlay(marker);
// 			}
// 		}
// 	}