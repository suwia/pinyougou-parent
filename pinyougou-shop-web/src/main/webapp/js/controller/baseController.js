app.controller('baseController', function($scope){
    	
    		//分页控件配置 
			$scope.paginationConf = {
				 currentPage: 1, //当前页数
				 totalItems: 10, //总页数
				 itemsPerPage: 10, //每页显示条数
				 perPageOptions: [10, 20, 30, 40, 50], //每页显示条数下拉框
				 
				 //当页数改变时触发的函数
				 onChange: function(){
				 	$scope.reloadList();
				 
				 }
			}; 
			
    		
    		//复选框被勾选的id数组
    		$scope.selectIds = [];
    		
    		//勾选复选框触发函数
    		$scope.updateSelection = function($event, id) {
    			//如果复选框的状态是勾选状态则将id添加到id数组里
    			if($event.target.checked) {
    				$scope.selectIds.push(id);
    			} else {
    				//如果复选框取消勾选则将id从数组中删除
    				var index = $scope.selectIds.indexOf(id);
    				$scope.selectIds.splice(index, 1);
    			}
    		
    		}
    		
    		//重新加载品牌列表
			$scope.reloadList = function() {
				//$scope.findBrandByPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage)
				$scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage)
			}
			
			
			//提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
			$scope.jsonToString=function(jsonString,key){
				var json=JSON.parse(jsonString);//将json字符串转换为json对象
				var value="";
				for(var i=0;i<json.length;i++){		
					if(i>0){
						value+=","
					}
					value+=json[i][key];			
				}
				return value;
			}

			
			
    	});