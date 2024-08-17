package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;




public interface UserDao extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
	Optional<User> findByUserName(String userName);;
}
