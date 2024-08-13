package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "tags")
public class Tags extends BaseEntity {
	
	@Column(name = "tag_name",length =50)
	String tagName;
	
	
	
	//MANY TO MANY UNI DIRECTIONAL
	//*TAGS --> * PROPERTIES
	@ManyToMany //mandatory
	@JoinTable(name="my_tag_properties",
	joinColumns = @JoinColumn(name="tag_id"),
	inverseJoinColumns = @JoinColumn(name="property_id"))	

	private Set<Property> properties = new HashSet<>();
	
}
