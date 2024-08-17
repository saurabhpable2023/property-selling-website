package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveUserDto {

	private String firstName;
	
	private String lastName;
	
	private String userName;
	
	private String email;
	
	private String password;
	
	private LocalDate dob;
	
	private String phoneNumber;
	
	private String city;
	
	private String state;
	
	
	
}
