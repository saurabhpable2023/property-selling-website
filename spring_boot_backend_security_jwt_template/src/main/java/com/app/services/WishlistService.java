package com.app.services;

import java.util.List;

import com.app.dto.WishListDTORequest;
import com.app.dto.WishListDTOResponse;

public interface WishlistService {

	String AddUserWishlist(WishListDTORequest request);
	
	List<WishListDTOResponse> getAllWishlistUser(Long id);
	
}
