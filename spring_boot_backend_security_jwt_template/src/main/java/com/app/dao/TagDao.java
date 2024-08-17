package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Tag;

public interface TagDao extends JpaRepository<Tag, Long> {

	Optional<Tag> findByTagName(String tagName);
	
	
	
}
