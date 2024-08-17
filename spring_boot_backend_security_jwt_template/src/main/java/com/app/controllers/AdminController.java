package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginUserDto;
import com.app.dto.SaveUserDto;
import com.app.jwt.JwtService;
import com.app.security.UserInfoService;
import com.app.services.PropertyService;
import com.app.services.UserService;
import com.app.utils.ApiResponse;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserInfoService userInfoService;
	
	@PostMapping("/register")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<?> registerAdmin(@RequestBody SaveUserDto user){
		return ResponseEntity.ok(userInfoService.addAdmin(user));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginAdmin(@RequestBody LoginUserDto user){
		
		ApiResponse<String> response = new ApiResponse<String>();
		
		ApiResponse<?> data = userService.loginAdmin(user.getUsername(), user.getPassword());

		if(data.getStatus().equals("Success")) {
			response.setData(jwtService.generateToken(user.getUsername()));
		}else {
			response.setStatus("Invalid User!");
		}
		
		return ResponseEntity.ok(response);
	}
		
	@GetMapping("/data")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<?> getUserDetails(HttpServletRequest request){
		Long id = Long.parseLong((String) request.getAttribute("id"));
		String username = (String) request.getAttribute("username");
		
		System.out.println("id: " + id + " username: " + username);
		return ResponseEntity.ok(userService.findUserById(id));
	}
	@GetMapping("/list")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<?> getUserList(HttpServletRequest request){		
		return ResponseEntity.ok(userService.getAll());
	}
	
	@DeleteMapping("/delete/{userId}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		return ResponseEntity.ok(new com.app.dto.ApiResponse(userService.DeleteUser(userId)));
	}
	@DeleteMapping("/{Propertyid}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<?> deleteSpecific(@PathVariable Long Propertyid){
		return ResponseEntity.ok(new ApiResponse<>(propertyService.deleteProperty(Propertyid)));
	}
//	@PutMapping("/profile-picture")
//	@PreAuthorize("hasAuthority('USER')")
//    public ResponseEntity<?> uploadProfilePicture(HttpServletRequest request,@RequestBody MultipartFile file) {
//		
//		Long id = Long.parseLong((String) request.getAttribute("id"));
//        String response = userService.uploadProfilePicture(id, file);
//        return ResponseEntity.ok(new com.app.dto.ApiResponse(response));
//    }
	
}
