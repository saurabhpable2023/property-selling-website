package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserRepo extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String email, String pwd);
	Optional<User> findByEmail(String email);
	Optional<User> findByUsername(String username);
	
}
