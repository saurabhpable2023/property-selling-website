package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.SignInRequest;
import com.app.dto.SignInResponse;
import com.app.dto.SignUpRequest;
import com.app.dto.UserUpdateRequest;
import com.app.entities.User;

public interface UserService {
	public String addNewUser(SignUpRequest signUpRequest);
	public SignInResponse authenticateUser(SignInRequest signinrequest); 
	public SignInResponse findUserById(Long userId);
	public String uploadProfilePicture(Long userId, MultipartFile file);
	public String updateUser(UserUpdateRequest userUpdateRequest, Long userId);
	public boolean existsByEmail(String email);
	public boolean existsByUsername(String username);
}
