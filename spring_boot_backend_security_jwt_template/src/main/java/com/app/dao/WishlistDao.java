package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;
import com.app.entities.Wishlist;
import java.util.List;


public interface WishlistDao extends JpaRepository<Wishlist, Long> {

	
	List<Wishlist> findByUser(User user);
}
