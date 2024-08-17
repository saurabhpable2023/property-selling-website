package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Address;
import com.app.entities.Property;
import com.app.entities.User;

import java.util.List;


public interface PropertyDao extends JpaRepository<Property, Long> {

	List<Property> findByTitle(String title);
	
	List<Property> findByUser(User user);
	
	Property findByAddress(Address address);
}
