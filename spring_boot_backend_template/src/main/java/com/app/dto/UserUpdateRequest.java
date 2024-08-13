package com.app.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


import org.hibernate.validator.constraints.Length;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserUpdateRequest {
	@NotBlank(message = "First Name Required!!!")
	private String firstName;
	
	@NotBlank(message = "Last Name Required!!!")
	private String lastName;
	
		
	@NotBlank
	@Email(message = "Enter Valid Email Structure")
	private String email;
	
	
	@NotBlank(message = "City required!!!!")
	private String city;
	
	@NotBlank(message = "State required!!!!")
	private String state;
	
	@NotBlank
	@Length(min = 10,message = "Phone Number must be atleast 10 character Long")
	private String phoneNumber;
	
}
