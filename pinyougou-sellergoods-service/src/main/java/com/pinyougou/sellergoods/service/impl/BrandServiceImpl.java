package com.pinyougou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.pojo.TbBrandExample;
import com.pinyougou.pojo.TbBrandExample.Criteria;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageResult;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


@Service
public class BrandServiceImpl implements BrandService {
	
	@Autowired
	private TbBrandMapper tbBrandMapper;

	@Override
	public List<TbBrand> findAll() {
		return tbBrandMapper.selectByExample(null);
	}

	@Override
	public PageResult findBrandByPage(int pageSize, int pageNum) {
		
		PageHelper.startPage(pageNum, pageSize);
		Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	@Override
	public void add(TbBrand brand) {
		tbBrandMapper.insert(brand);
	}

	@Override
	public TbBrand findByID(long id) {
		return tbBrandMapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(TbBrand brand) {
		tbBrandMapper.updateByPrimaryKeySelective(brand);
	}

	@Override
	public void delete(long[] ids) {
		for (long id : ids) {
			tbBrandMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public PageResult findPaginResult(TbBrand brand, int pageSize, int pageNum) {
		PageHelper.startPage(pageNum, pageSize);
		System.out.println("brand = [" + brand + "], pageSize = [" + pageSize + "], pageNum = [" + pageNum + "]");
		TbBrandExample example = new TbBrandExample();
		
		if(brand != null) {
			Criteria criteria = example.createCriteria();
			if(brand.getName() != null && brand.getName().length()>0) {
				criteria.andNameLike("%" + brand.getName() + "%");
			}
			
			if(brand.getFirstChar() != null && brand.getFirstChar().length()>0) {
				criteria.andFirstCharLike("%" + brand.getFirstChar() + "%");
			}
		}
		
		Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(example);
		return new PageResult(page.getTotal(), page.getResult());
	}

	@Override
	public List<Map> selectOptionList() {
		// TODO Auto-generated method stub
		return tbBrandMapper.selectOptionList();
	}

}
