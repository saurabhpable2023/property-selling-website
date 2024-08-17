package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "properties")
public class Property extends BaseEntity {

	@Column(length = 50)
	private String title;
	
	@Column
	@Lob
	private String description;
	
	@Column
	private double price;
	
	@Column
	private double propertyArea;
	
	@Column
	@Enumerated(EnumType.STRING)
	private PropertyType propertyType;
	
	@Column
	private int bedrooms;
	
	@Column
	private int bathrooms;
	
	@Column
	private boolean isSold = false;
	
	private boolean isDeleted;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userId")
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "addressId", unique = true)
	private Address address;
	
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "properties", fetch = FetchType.LAZY)
	private Set<Tag> tags = new HashSet<>();
}
