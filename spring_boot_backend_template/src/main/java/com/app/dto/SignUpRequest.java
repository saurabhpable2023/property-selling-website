package com.app.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SignUpRequest {
	@NotBlank(message = "First Name Required!!!")
	private String firstName;
	
	@NotBlank(message = "Last Name Required!!!")
	private String lastName;
	
	// @Unique(entityClass = User.class, fieldName = "email", message = "Email is already in use")	
	@NotBlank
	@Email(message = "Enter Valid Email Structure")
	
	private String email;
	
	@NotBlank(message = "Last Name Required!!!")
	private String username;
	
		
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})"
			,message ="Blank or not valid password pattern!!!!" )
	private String password;
	
	@NotBlank(message = "City required!!!!")
	private String city;
	
	@NotBlank(message = "State required!!!!")
	private String state;
	
	@NotBlank
	@Length(min = 10,message = "Phone Number must be atleast 10 character Long")
	private String phoneNumber;
	
}
