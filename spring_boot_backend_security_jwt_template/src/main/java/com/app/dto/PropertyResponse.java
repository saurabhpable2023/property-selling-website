package com.app.dto;


import java.time.LocalDateTime;
import java.util.Set;

import jakarta.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class PropertyResponse {
	private Long id;
	@NotBlank
	private String title;
	private AddressDTO address;
	private Set<TagsDTORequest> tags;
	@NotBlank
	private String propertyType;
	private float price;
	private float propertyArea;
	private int bedrooms;
	private int bathrooms;
	@NotBlank
	private String owner;
	private Long userid;
	private String description;
	private Boolean isSold;
	private Boolean isDeleted;
	private LocalDateTime UpdatedDateTime;
	private LocalDateTime createdDateTime;
}
