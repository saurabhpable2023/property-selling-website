package com.app.dto;


import java.util.Set;

import com.app.entities.PropertyType;
import jakarta.validation.constraints.NotBlank;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class PropertyRequest {
	@NotBlank
	private String title;
	@NotBlank
	private String description;
	private float price;
	private float propertyArea;
	private PropertyType propertyType;
	private int bedrooms;
	private int washrooms;
	private AddressDTO address;
	private Set<TagsDTORequest> tags;
}
