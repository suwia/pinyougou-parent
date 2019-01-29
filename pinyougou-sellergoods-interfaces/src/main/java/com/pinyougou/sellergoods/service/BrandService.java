package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

public interface BrandService {

	/**
	 * 寻找所有的品牌列表信息
	 * @return
	 */
	public List<TbBrand> findAll();
	
	
	/**
	 * 根据分页信息获取分页内容: 
	 * pageSize:每页记录数
	 * pageNum：当前页数
	 * @return
	 */
	public PageResult findBrandByPage(int pageSize, int pageNum);
	
	
	/**
	 * 新增品牌信息
	 * @param brand
	 */
	public void add(TbBrand brand);


	/**
	 * 根据id查找品牌信息
	 * @param id
	 * @return
	 */
	public TbBrand findByID(long id);
	
	/**
	 * 更新品牌信息
	 */
	public void update(TbBrand brand);
	
	
	/**
	 * 根据id删除对应的品牌信息
	 */
	public void delete(long[] ids);
	
	/**
	 * 根据条件查询品牌信息，并且为查询结果分页
	 * @param brand
	 * @param pageSize
	 * @param pageNum
	 * @return
	 */
	public PageResult findPaginResult(TbBrand brand, int pageSize, int pageNum);
	
	
	/**
	 * 品牌信息下拉列表
	 * @return
	 */
	public List<Map> selectOptionList();
	
	
}
