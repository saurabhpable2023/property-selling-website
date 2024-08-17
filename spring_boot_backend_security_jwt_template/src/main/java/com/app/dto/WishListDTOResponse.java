package com.app.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class WishListDTOResponse {

	@NotBlank
	private Long id;

	@NotBlank
	private Long userid;

	@NotBlank
	private PropertyResponse property;
	
	@NotBlank
	private String owner;
	
	private boolean onCart;
}
