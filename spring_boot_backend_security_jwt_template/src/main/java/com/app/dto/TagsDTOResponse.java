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
public class TagsDTOResponse {
	@NotBlank
	private String tagName;
	@NotBlank
	private String tagDesc;
}
