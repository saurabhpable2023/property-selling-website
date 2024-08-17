package com.app.dto;

import java.util.Set;

import com.app.entities.Property;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class TagsAddDTORequest {

	@NotBlank
	private String tagName;
	@NotBlank
	private String tagDesc;
	@JsonProperty(access = Access.READ_ONLY)
	private Set<Property> property;
}
	

