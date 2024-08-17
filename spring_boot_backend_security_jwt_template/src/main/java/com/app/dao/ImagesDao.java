package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Images;
import com.app.entities.Property;

public interface ImagesDao extends JpaRepository<Images, Long> {
	List<Images> findByProperty(Property p);
}