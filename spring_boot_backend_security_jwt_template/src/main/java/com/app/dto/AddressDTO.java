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
public class AddressDTO {
	@NotBlank
	private String addressLine1;
	@NotBlank
	private String addressLine2;
	@NotBlank
	private String city;
	@NotBlank
	private String state;
	@NotBlank
	private String district;
	@NotBlank
	private String pincode;
}
