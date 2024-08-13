package com.app.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "property")
public class Property extends BaseEntity {
	@Column(length = 255,nullable = false)
	private String title;
	
	@Lob
	private String description;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "address_id")
	private Address propertyAddress;
	
	@Column(length = 50,nullable = false)
	private String propertyType;
	
	@Column(length = 10,precision = 2)
	private float price;
	
	private float propertyArea;
	
	private int bedrooms;
	
	private int bathrooms;
	
	@ManyToOne()
	@JoinColumn(name = "user_id")
	private User user;
	
//	@UpdateTimestamp
//	private LocalDateTime listingDate;
	

	private int  isSold=0;
	
	private int isDeleted=0;
	
	
}
