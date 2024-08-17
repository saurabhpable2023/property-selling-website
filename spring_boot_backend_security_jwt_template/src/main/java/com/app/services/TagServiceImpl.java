package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import jakarta.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.TagDao;
import com.app.dto.PropertyResponse;
import com.app.dto.TagsAddDTORequest;
import com.app.dto.TagsDTOResponse;
import com.app.entities.Property;
import com.app.entities.Tag;

@Service
@Transactional
public class TagServiceImpl  implements TagsService{

	
	@Autowired 
	private TagDao tagDao;

	@Autowired 
	private ModelMapper mapper;

	@Override
	public List<TagsDTOResponse> getAllTags() {
		List<Tag> tagsList=tagDao.findAll();
		List<TagsDTOResponse> tagList=new ArrayList<TagsDTOResponse>();
		for (Tag tags : tagsList) {
			TagsDTOResponse tag=mapper.map(tags, TagsDTOResponse.class);
			tagList.add(tag);
		}
		return tagList;
	}

	@Override
	public List<PropertyResponse> SeachPropertyByTagName(String tagName) {
		Tag tags=tagDao.findByTagName(tagName).orElseThrow((()->new ResourceNotFoundException("Invalid Tag Name Given")));
		Set<Property> properties=tags.getProperties();
		List<PropertyResponse> props=new ArrayList<PropertyResponse>();
		for (Property property : properties) {
			PropertyResponse prop=mapper.map(property, PropertyResponse.class);
			props.add(prop);
		}
		return props;
	}

	@Override
	public String AddTags(TagsAddDTORequest request) {
		Tag tags=tagDao.findByTagName(request.getTagName()).orElse(null);
		if(tags!=null) {
			throw new ResourceNotFoundException("Tag Already Exists in System");
		}
		tags=mapper.map(request, Tag.class);
		tagDao.save(tags);
		return "Added New Tag";
	}
	
}
