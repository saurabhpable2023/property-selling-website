package com.app.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.PropertyDao;
import com.app.dao.UserDao;
import com.app.dao.WishlistDao;
import com.app.dto.PropertyResponse;
import com.app.dto.WishListDTORequest;
import com.app.dto.WishListDTOResponse;
import com.app.entities.Property;
import com.app.entities.User;
import com.app.entities.Wishlist;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class WishlistServiceImpl implements WishlistService {

	@Autowired
	private WishlistDao wishlistDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private PropertyDao propertyDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public String AddUserWishlist(WishListDTORequest request) {
		User u = userDao.findById(request.getUserid())
				.orElseThrow((() -> new ResourceNotFoundException("Invalid UserId Given")));
		Property p = propertyDao.findById(request.getPropertyid())
				.orElseThrow((() -> new ResourceNotFoundException("Invalid PropertyId Given")));
		List<Wishlist> wishlist = wishlistDao.findAll();
		if (p.getUser().getId() != u.getId()) {
			for (Wishlist wish : wishlist) {
				if (wish.getProperty().equals(p) && wish.getUser().equals(u)) {
					if (wish.isOnWishlist() == true) {
						wishlistDao.delete(wish);
						return "Removed from Wishlist!";
					}
				}
			}
			Wishlist w = new Wishlist();
			w.setProperty(p);
			w.setUser(u);
			w.setOnWishlist(true);

			wishlistDao.save(w);

			return "WishList Record Added";
		}
		return "Can't Your Own Property";
	}

	@Override
	public List<WishListDTOResponse> getAllWishlistUser(Long userId) {
		User u = userDao.findById(userId).orElseThrow((() -> new ResourceNotFoundException("Invalid UserId Given")));
		List<Wishlist> wishlist = wishlistDao.findByUser(u);
		List<WishListDTOResponse> wishlistDTO = new ArrayList<WishListDTOResponse>();
		for (Wishlist wish : wishlist) {
			WishListDTOResponse wishDTO = new WishListDTOResponse();
			wishDTO.setId(wish.getWishlistId());
			wishDTO.setUserid(wish.getUser().getId());
			wishDTO.setProperty(mapper.map(wish.getProperty(), PropertyResponse.class));
			wishDTO.setOwner(wish.getUser().getFirstName() + " " + wish.getUser().getLastName());
			wishlistDTO.add(wishDTO);
		}
		return wishlistDTO;
	}

}
