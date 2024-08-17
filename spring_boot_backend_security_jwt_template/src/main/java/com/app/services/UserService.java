package com.app.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ResetPasswordDto;
import com.app.dto.SaveUserDto;
import com.app.entities.User;
import com.app.utils.ApiResponse;

public interface UserService {

	ApiResponse<?> addNewUser(SaveUserDto user);
	
	ApiResponse<?> loginUser(String email, String password);
	
	ApiResponse<?> findByUsername(String username);
	
	ApiResponse<?> findUserById(Long id);
	
	ApiResponse<?> changePassword(ResetPasswordDto data, String username);
	
	String uploadProfilePicture(Long userId, MultipartFile file);
	
	List<User> getAll();
	
	String DeleteUser(Long userId);
	
	ApiResponse<?> loginAdmin(String username, String password);
	
	String updateUser(Long userId, SaveUserDto user);
}
