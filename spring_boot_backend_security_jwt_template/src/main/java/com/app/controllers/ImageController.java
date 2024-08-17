package com.app.controllers;


import jakarta.validation.Valid;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.services.ImageService;
import io.swagger.v3.oas.annotations.Operation;
import com.app.utils.ApiResponse;
import com.app.dto.ImageDTORequest;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/Image")
public class ImageController {
	
	@Autowired
	private ImageService imageService;
	
	@PostMapping("/add/{propertyId}")
	@Operation(summary = "To Add new Image per Property")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> addNewImageProperty(@ModelAttribute @Valid ImageDTORequest request ,@PathVariable Long propertyId){
		return ResponseEntity.ok(new ApiResponse<String>(imageService.addNewImageProperty(request, propertyId)));
	}
	
	
	@GetMapping("/list/{propertyId}")
	@Operation(summary = "To Get Images by Property")
	public ResponseEntity<?> getSpecificProperty(@PathVariable Long propertyId) throws IOException{
		return ResponseEntity.ok(imageService.SeachImagesByProperty(propertyId));
	}
	
	@PreAuthorize("hasAuthority('USER')")
	@DeleteMapping("/{imageId}")
	@Operation(summary = "To Delete Image")
	public ResponseEntity<?> updateProperty(@PathVariable Long imageId){
		return ResponseEntity.ok(new ApiResponse<String>(imageService.DeletePropertyImages(imageId)));
	}
}
