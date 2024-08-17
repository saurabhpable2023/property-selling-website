package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.WishListDTORequest;
import com.app.services.WishlistService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
@RequestMapping("/wishlist")
public class WishlistController {

	@Autowired
	private WishlistService wishlistService;
	
	@PostMapping("/add")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> AddUserWishlist(HttpServletRequest req,@RequestBody WishListDTORequest request){
		Long id = Long.parseLong(req.getAttribute("id").toString());
		request.setUserid(id);
		return ResponseEntity.ok(new ApiResponse(wishlistService.AddUserWishlist(request)));
	}
	
	@GetMapping("/list")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> getUserWishlist(HttpServletRequest req){
		Long id = Long.parseLong(req.getAttribute("id").toString());
		return ResponseEntity.ok(wishlistService.getAllWishlistUser(id));
	}
}
