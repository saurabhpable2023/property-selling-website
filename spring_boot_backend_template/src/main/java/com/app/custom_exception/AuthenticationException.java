package com.app.custom_exception;

public class AuthenticationException extends RuntimeException{
	public AuthenticationException(String mesg) {
		super(mesg);
	}
}
