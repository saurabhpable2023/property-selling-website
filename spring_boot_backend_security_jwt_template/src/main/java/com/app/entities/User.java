package com.app.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseEntity {

	@Column(length = 20)
	private String firstName;
	
	@Column(length = 20)
	private String lastName;
	
	@Column(length = 20, unique = true)
	private String userName;
	
	@Column(length = 50)
	private String email;
	
	@Column(length = 255)
	private String password;
	
	@Column
	private LocalDate dob;
	
	@Column(length = 10)
	private String phoneNumber;
	
	@Column(length = 30)
	private String city;
	
	@Column(length = 20)
	private String state;
	
	@Column
	private String role = "USER";
	
	private boolean isDeleted;
	
	@Column(columnDefinition = "LONGBLOB")
	@Lob
	private byte[] profilePic;
}
