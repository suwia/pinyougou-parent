app.controller('indexController', function($scope, loginService){
    	
    		//寻找所有的品牌列表
    		$scope.getName = function(){
	    		loginService.getName().success(function(data) {
	    			$scope.loginName = data.loginName;
	    		});
    		}
    		
});