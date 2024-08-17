package com.app.services;

import java.io.IOException;
import java.util.List;

import com.app.dto.ImageDTORequest;
import com.app.dto.ImageDTOResponse;

import jakarta.validation.Valid;

public interface ImageService {

	String addNewImageProperty(@Valid ImageDTORequest imageBody, Long propertyId);

	String DeletePropertyImages(Long imageId);
	
	List<ImageDTOResponse> SeachImagesByProperty(Long propertyId) throws IOException;	
	
}
