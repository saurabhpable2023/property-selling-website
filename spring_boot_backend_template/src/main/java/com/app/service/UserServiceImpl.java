package com.app.service;

import java.io.IOException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.AuthenticationException;
import com.app.dto.SignInRequest;
import com.app.dto.SignInResponse;
import com.app.dto.SignUpRequest;
import com.app.dto.UserUpdateRequest;
import com.app.entities.User;
import com.app.repository.UserRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepo userRepository;
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public String addNewUser(SignUpRequest signUpRequest) {
		User user = modelMapper.map(signUpRequest, User.class);
		userRepository.save(user);
		return "success";
	}

	@Override
	public SignInResponse authenticateUser(SignInRequest signinrequest) {
		User userEmtity = userRepository.findByEmailAndPassword(signinrequest.getEmail(),signinrequest.getPassword())
				.orElseThrow(()->new AuthenticationException("Invalid Username or password"));
		return modelMapper.map(userEmtity, SignInResponse.class);
	}
	
	@Override
	public SignInResponse findUserById(Long userId) {
	User user= userRepository.findById(userId).orElseThrow(()->new AuthenticationException("user not found"));
		return modelMapper.map(user, SignInResponse.class);
	}

	@Override
	public String uploadProfilePicture(Long userId, MultipartFile file) {
		System.out.println("in upload service impl");
		User user = userRepository.findById(userId)
	                .orElseThrow(() -> new RuntimeException("User not found"));
	        try {
	            byte[] imageData = file.getBytes();
	            System.out.println("In the upload profile function");
	            user.setProfilePicture(imageData);
	            userRepository.save(user);
	            return "Profile picture uploaded successfully.";
	        } catch (IOException e) {
	            throw new RuntimeException("Failed to upload profile picture", e);
	        }
	}

	@Override
	public String updateUser(UserUpdateRequest userUpdateRequest, Long userId) {
			User userEntity = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
			userEntity.setFirstName(userUpdateRequest.getFirstName());
			userEntity.setLastName(userUpdateRequest.getLastName());
			userEntity.setCity(userUpdateRequest.getEmail());
			userEntity.setCity(userUpdateRequest.getCity());
			userEntity.setState(userUpdateRequest.getState());
			userRepository.save(userEntity);
		return "user updated succwssfully";
	}

	@Override
	public boolean existsByEmail(String email) {
		User user= userRepository.findByEmail(email).orElse(null);
		if(user== null)
			return false;
		return true;
	}

	@Override
	public boolean existsByUsername(String username) {
		User user = userRepository.findByUsername(username).orElse(null);
		if(user== null)
			return false;
		return true;
	} 
	
	
	
}
