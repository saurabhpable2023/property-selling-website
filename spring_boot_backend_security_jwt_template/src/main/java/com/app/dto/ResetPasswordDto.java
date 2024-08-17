package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordDto {

	private String token;
	private String oldPassword;
	private String newPassword;
	
}
