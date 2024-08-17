package com.app.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class WishListDTORequest {

	@NotBlank
	private Long userid;

	@NotBlank
	private Long propertyid;	
}
