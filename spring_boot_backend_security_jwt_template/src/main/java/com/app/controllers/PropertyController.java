package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.PropertyRequest;
import com.app.services.PropertyService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/Property")
public class PropertyController {

	@Autowired
	private PropertyService propertyService;
	
	@PostMapping("/add")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> addProperty(HttpServletRequest request ,@RequestBody @Valid PropertyRequest property){
		Long userId = Long.parseLong(request.getAttribute("id").toString());
		return ResponseEntity.ok(propertyService.addNewProperty(property, userId));
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> getSpecificUser(HttpServletRequest request){
		Long userId = Long.parseLong(request.getAttribute("id").toString());
		return ResponseEntity.ok(propertyService.seachProductByUser(userId));
	}
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "10") int size){
		return ResponseEntity.ok(propertyService.getAll(page,size));
	}
	
	@GetMapping("/{PropId}")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> getById(@PathVariable Long PropId){
		return ResponseEntity.ok(propertyService.getById(PropId));
	}
	
	@PutMapping("/update/{id}")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> updateProperty(@RequestBody PropertyRequest request,@PathVariable Long id){
		return ResponseEntity.ok(new ApiResponse(propertyService.updatePropertyDetails(request,id)));
	}
}
