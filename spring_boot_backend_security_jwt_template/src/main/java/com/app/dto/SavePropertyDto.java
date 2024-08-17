package com.app.dto;

import java.util.List;

import com.app.entities.PropertyType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SavePropertyDto {

	private String title;
	
	private String description;
	
	private double price;
	
	private double propertyArea;
	
	private PropertyType propertyType;
	
	private int bedrooms;
	
	private int bathrooms;
	
	private SaveAddressDto address;
	
	private List<String> tagNames;
	
}
