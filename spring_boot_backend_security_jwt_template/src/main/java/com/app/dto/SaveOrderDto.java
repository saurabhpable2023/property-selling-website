package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveOrderDto {

	private int propertyId;
	
	private int orderStatus;
	
	private int orderAmount;	
}
