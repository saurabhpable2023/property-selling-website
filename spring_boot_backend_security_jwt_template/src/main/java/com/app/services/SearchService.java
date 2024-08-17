package com.app.services;

import java.util.List;

import com.app.dto.PropertyResponse;
import com.app.utils.ApiResponse;

public interface SearchService {

	ApiResponse<List<PropertyResponse>> searchByCityName(String cityName);
	
	ApiResponse<List<PropertyResponse>> searchByStateName(String stateName);
	
	ApiResponse<List<PropertyResponse>> searchByTagName(String tagName);
	
	ApiResponse<List<PropertyResponse>> searchByPropertyName(String propertyName);
	
	ApiResponse<List<PropertyResponse>> searchByUsername(String userName);
	
	
	
}
