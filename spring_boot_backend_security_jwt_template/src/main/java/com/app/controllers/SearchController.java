package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.services.SearchService;

@RestController
@CrossOrigin
@RequestMapping("/search")
public class SearchController {

	@Autowired
	private SearchService searchService;
	
	@GetMapping("/city/{cityName}")
	public ResponseEntity<?> findByCityName(@PathVariable String cityName){
		return ResponseEntity.ok(searchService.searchByCityName(cityName));
	}
	
	@GetMapping("/state/{stateName}")
	public ResponseEntity<?> findByStateName(@PathVariable String stateName){
		return ResponseEntity.ok(searchService.searchByStateName(stateName));
	}
		
	@GetMapping("/tag/{tagName}")
	public ResponseEntity<?> findByTagName(@PathVariable String tagName){
		return ResponseEntity.ok(searchService.searchByTagName(tagName.toUpperCase()));
	}
	
	@GetMapping("/property/{propertyName}")
	public ResponseEntity<?> findByPropertyName(@PathVariable String propertyName){
		return ResponseEntity.ok(searchService.searchByPropertyName(propertyName));
	}
	
	@GetMapping("/user/{userName}")
	public ResponseEntity<?> findByUsername(@PathVariable String userName){
		return ResponseEntity.ok(searchService.searchByUsername(userName));
	}
	
}
