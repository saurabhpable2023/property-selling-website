package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LoginUserDto;
import com.app.dto.ResetPasswordDto;
import com.app.dto.SaveUserDto;
import com.app.jwt.JwtService;
import com.app.security.UserInfoService;
import com.app.services.UserService;
import com.app.utils.ApiResponse;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserInfoService userInfoService;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody SaveUserDto user){
		return ResponseEntity.ok(userInfoService.addUser(user));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginUserDto user){
		
		ApiResponse<String> response = new ApiResponse<String>();
		
		ApiResponse<?> data = userService.loginUser(user.getUsername(), user.getPassword());

		if(data.getStatus().equals("Success")) {
			response.setData(jwtService.generateToken(user.getUsername()));
		}else {
			response.setStatus("Invalid User!");
		}
		
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("/changePassword")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> changePasswordApi(HttpServletRequest request, @RequestBody ResetPasswordDto data){
		String username = (String) request.getAttribute("username");
		
		return ResponseEntity.ok(userService.changePassword(data, username));
	}
	
	@GetMapping("/data")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> getUserDetails(HttpServletRequest request){
		Long id = Long.parseLong((String) request.getAttribute("id"));
		return ResponseEntity.ok(userService.findUserById(id));
	}
	
	@PutMapping("/profile-picture")
	@PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<?> uploadProfilePicture(HttpServletRequest request,@RequestBody MultipartFile file) {
		
		Long id = Long.parseLong((String) request.getAttribute("id"));
        String response = userService.uploadProfilePicture(id, file);
        return ResponseEntity.ok(new com.app.dto.ApiResponse(response));
    }
	
	@PutMapping("/update")
	@PreAuthorize("hasAuthority('USER')") 
	public ResponseEntity<?> updateUserProfile(HttpServletRequest request ,@RequestBody SaveUserDto user){
		Long id = Long.parseLong((String)request.getAttribute("id"));
		String respone = userService.updateUser(id, user);
		return ResponseEntity.ok(new com.app.dto.ApiResponse(respone));
	}
	
	@GetMapping("/get/{userId}")
	@PreAuthorize("hasAuthority('USER')")
	public ResponseEntity<?> getUserDetailsById(HttpServletRequest request,@PathVariable Long userId){
		return ResponseEntity.ok(userService.findUserById(userId));
	}
	
}
