package com.app.services;

import java.util.List;

import com.app.dto.PropertyResponse;
import com.app.dto.TagsAddDTORequest;
import com.app.dto.TagsDTOResponse;

public interface TagsService {
	
	String AddTags(TagsAddDTORequest request);
	List<TagsDTOResponse> getAllTags();

	List<PropertyResponse> SeachPropertyByTagName(String tagName);	
}
