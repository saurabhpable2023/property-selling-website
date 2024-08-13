package com.app.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User extends BaseEntity {
	@Column(length = 100)
	private String firstName;
	
	@Column(length = 100)
	private String lastName;
	
	@Column(length = 100, unique = true )
	private String username;
	
	@Column(length = 100,unique = true)
	@Email
	private String email;
	
	@Column(length = 100)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(columnDefinition="VARCHAR(100) DEFAULT 'USER'")
	private UserRole role=UserRole.ROLE_USER;
	
	@Column(length = 20)
	private String phoneNumber;
	
	@Column(length = 20)
	private String city;
	
	@Column(length = 20)
	private String state;
	
	private int isDeleted;
	
	@Lob
	@Column(name = "profile_picture", columnDefinition = "LONGBLOB")
	private byte[] profilePicture;
}
