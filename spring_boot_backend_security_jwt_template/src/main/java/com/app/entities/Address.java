package com.app.entities;



import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "address")
@AllArgsConstructor
@NoArgsConstructor
public class Address extends BaseEntity {

	@Column(length = 100)
	private String addressLine1;
	
	@Column(length = 100)
	private String addressLine2;
	
	@Column(length = 30)
	private String city;
	
	@Column(length = 30)
	private String district;
	
	@Column(length = 30)
	private String state;
	
	@Column(length = 6)
	private String pincode;
	
	@JsonIgnore
	@OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
	private Property property;
}
