package com.app.dto;

import com.app.entities.UserRole;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SignInResponse {
	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String city;
	
	private String state;
	
	private UserRole role;
	
	private String phoneNumber;
	
	private byte[] profilePicture;
}
