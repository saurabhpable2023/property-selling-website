package com.app.controller;




import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.app.dto.ApiResponse;
import com.app.dto.SignInRequest;
import com.app.dto.SignUpRequest;
import com.app.dto.UserUpdateRequest;
import com.app.service.UserService;
import com.app.entities.User;


import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000" )
public class UserController {

	@Autowired
	private UserService userService;
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;
//	
//	@Autowired
//	private JwtUtils jwaJwtUtils;
	
//	@PostMapping("/signup")
//	@Operation(summary = "To Add new User")
//	public ResponseEntity<?> addNew(@RequestBody @Valid SignUpRequest signUpRequest) {
//	    // Check if the email is already registered
//	    if (userService.existsByEmail(signUpRequest.getEmail())) {
//	        return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse("Email address already in use!"));
//	    }
//
//	    // Check if the username is already taken
//	    if (userService.existsByUsername(signUpRequest.getUsername())) {
//	        return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse("Username is already taken!"));
//	    }
//
//	    // Hash the password
//	    signUpRequest.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
//
//	    // Create a new user
//	    User newUser = userService.addNewUser(signUpRequest);
//	    
//	    if (newUser != null) {
//	        // Load UserDetails for the new user
//	        CustomUserDetails userDetails = customUserDetailsService.loadUserByUsername(newUser.getEmail());
//
//	        // Generate JWT Token with correct Principal
//	        String jwtToken = jwaJwtUtils.generateJwtToken(new UsernamePasswordAuthenticationToken(
//	            userDetails, null, userDetails.getAuthorities()
//	        ));
//
//	        // Create response
//	        SignUpResponse response = new SignUpResponse(jwtToken, "User registered successfully!");
//
//	        return ResponseEntity.status(HttpStatus.CREATED).body(response);
//	    } else {
//	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//	                             .body(new ApiResponse("Failed to create user"));
//	    }
//	}

	@PostMapping("/signup")
	@Operation(summary = "To Add new User")
	public ResponseEntity<?> addNew(@RequestBody @Valid SignUpRequest signUpRequest) {
		return ResponseEntity.ok(new ApiResponse(userService.addNewUser(signUpRequest)));
		
	}
	
	
	@PostMapping("/signin")
	@Operation(summary = "To Sign in user")
	public ResponseEntity<?> signInUser(@RequestBody @Valid SignInRequest request){
		return ResponseEntity.ok(userService.authenticateUser(request));
	}
	
	@GetMapping("/finduser/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable Long userId) {
		return ResponseEntity.ok(userService.findUserById(userId));
	}
	
	@PutMapping("/update/{userId}")
	@Operation(summary = "update existing User")
	public ResponseEntity<?> updateUser(@RequestBody @Valid UserUpdateRequest userUpdateRequest, @PathVariable String userId){
		return ResponseEntity.ok(new ApiResponse(userService.updateUser(userUpdateRequest, Long.valueOf(userId))));
	}	
	
	@PutMapping("/{userId}/profile-picture")
    public ResponseEntity<?> uploadProfilePicture(@PathVariable String userId, @RequestBody MultipartFile file) {
        String response = userService.uploadProfilePicture((Long)Long.parseLong(userId), file);
        return ResponseEntity.ok(new ApiResponse(response));
    }
}
