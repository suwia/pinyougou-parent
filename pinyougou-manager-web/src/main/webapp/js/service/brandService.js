app.service('brandService', function($http) {
    	
    		this.findAll = function() {
    			return $http.get('../brand/findAll.do');
    		}
    		
    		this.findBrandByPage = function(currPage, pageSize) {
    			return $http.get('../brand/findBrandByPage.do?pageSize=' + pageSize + '&pageNum=' + currPage);
    		}
    		
    		this.addBrand = function(entity) {
    			return $http.post('../brand/addBrand.do', entity)
    		}
    		
    		this.updateBrand = function(entity) {
    			return $http.post('../brand/updateBrand.do', entity)
    		}
    		
    		this.findByID = function(id) {
    			return $http.get('../brand/findByID.do?id=' + id);
    		}
    		
    		this.deleteByID = function(ids) {
    			return $http.get('../brand/deleteByID.do?ids=' + ids);
    		}
    		
    		this.search = function(currPage, pageSize, entity) {
    			return $http.post('../brand/search.do?pageSize=' + pageSize + '&pageNum=' + currPage, entity)
    		}
    		
    		//查找商品品牌下拉列表
    		this.selectOptionList = function() {
    			return $http.get('../brand/selectOptionList.do');
    		}
    	})