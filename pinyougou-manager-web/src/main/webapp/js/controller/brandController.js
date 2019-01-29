app.controller('brandController', function($scope, $controller, brandService){
    	
			$controller('baseController',{$scope:$scope});//继承	
			
    		//寻找所有的品牌列表
    		$scope.findAll = function(){
	    		brandService.findAll().success(function(data) {
	    			$scope.list = data;
	    		});
    		}
    		
			
			
			
			    
			//根据分页参数查找品牌列表		
			$scope.findBrandByPage = function(currPage, pageSize) {
				
				brandService.findBrandByPage(currPage, pageSize).success(function(data) {
console.log(data)
					$scope.list = data.rows;
					$scope.paginationConf.totalItems = data.total;
					
				});
			}	
			
			//添加新的品牌信息
			$scope.save = function() {
			
				let method = brandService.addBrand($scope.entity);
				
				if($scope.entity.id != null) {
					method = brandService.updateBrand($scope.entity);
				}
				
				method.success(function(data) {
					if(data.success) {
						$scope.reloadList();
					}else {
						alert(data.message);
					}
				});
			}				
    		
    		//根据id查找品牌信息
    		$scope.findByID = function(id) {
    		
    			brandService.findByID(id).success(function(data) {
    				$scope.entity = data;
    			})
    		}
    		
    		
    		//删除品牌信息
    		$scope.deleteByID = function() {
    		
    			brandService.deleteByID($scope.selectIds).success(function(data) {
    				if(data.success) {
	    				$scope.reloadList();
    				} else {
    					alert(data.message);
    				}
    				
    				//删除不管成功还是失败清空id数组
    				$scope.selectIds = [];
    			})
    		}
    		
    		$scope.searchEntity = {};
    		
    		$scope.search = function(currPage, pageSize) {
    			brandService.search(currPage, pageSize, $scope.searchEntity).success(function(data) {
console.log(data)
					$scope.list = data.rows;
					$scope.paginationConf.totalItems = data.total;
					
				});
    		}
    		
    	});