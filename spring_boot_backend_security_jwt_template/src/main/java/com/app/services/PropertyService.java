package com.app.services;

import java.util.List;

import com.app.dto.PropertyRequest;
import com.app.dto.PropertyResponse;
import com.app.dto.PropertyResponsePaginated;


public interface PropertyService {

	PropertyResponse addNewProperty(PropertyRequest request, Long Userid);
	
	PropertyResponsePaginated getAll(int page,int size);
	
	List<PropertyResponse> seachProductByUser(Long Userid);
	
	PropertyResponse getById(Long id);
	
	String deleteProperty(Long id);
	
	String updatePropertyDetails(PropertyRequest request, Long Propertyid);
}
