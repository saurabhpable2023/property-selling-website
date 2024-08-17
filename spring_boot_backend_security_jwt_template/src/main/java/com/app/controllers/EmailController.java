package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.email.EmailDetails;
import com.app.email.EmailService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/email")
public class EmailController {
	@Autowired
	private EmailService emailService;
	 
    // Sending a simple Email
    @PostMapping("/send")
	@PreAuthorize("hasAuthority('USER')")
    public String sendMail(HttpServletRequest request,@RequestBody EmailDetails details)
    {
    	Long userId = Long.parseLong(request.getAttribute("id").toString());
        String status
            = emailService.sendSimpleMail(details,userId);
 
        return status;
    }

}