package com.app.email;

public interface EmailService {

	// Method
	// To send a simple email
	String sendSimpleMail(EmailDetails details,Long userId);
}

