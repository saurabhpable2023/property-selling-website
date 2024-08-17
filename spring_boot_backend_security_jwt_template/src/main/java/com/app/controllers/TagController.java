package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TagsAddDTORequest;
import com.app.dto.TagsDTOResponse;
import com.app.services.TagsService;
import com.app.utils.ApiResponse;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/Tags")
public class TagController {
	@Autowired
	private TagsService tagsService;
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping("/add")
	public ResponseEntity<?> AddTags(@RequestBody @Valid TagsAddDTORequest request){
		return ResponseEntity.ok(new ApiResponse<String>(tagsService.AddTags(request)));
	}
	
	@PreAuthorize("hasAuthority('USER')")
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		ApiResponse<List<TagsDTOResponse>> response = new ApiResponse<>();
		response.setData(tagsService.getAllTags());
		return ResponseEntity.ok(response);
	}
	
	@PreAuthorize("hasAuthority('USER')")
	@GetMapping("/list/property/{tagName}")
	public ResponseEntity<?> getPropertyByLine1(@PathVariable String tagName){
		return ResponseEntity.ok(tagsService.SeachPropertyByTagName(tagName));
	}
	
}
