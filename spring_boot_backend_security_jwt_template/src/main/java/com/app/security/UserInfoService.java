package com.app.security;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.SaveUserDto;
import com.app.entities.User;
import com.app.utils.ApiResponse;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserInfoService implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> userDetail = userDao.findByUserName(username);
		
		UserInfoDetails userDetails = new UserInfoDetails(userDetail.get());
		
		return userDetails;
	}

	public ApiResponse<?> addUser(SaveUserDto user) {
		// Encode password before saving the user
		// userInfo.setPassword(encoder.encode(userInfo.getPassword()));

		ApiResponse<String> response = new ApiResponse<>();

		User existingUser = new User();

		if (!(userDao.findByUserName(user.getUserName()).isEmpty()))
			response.setStatus("Username Already Exists!");
		else if (userDao.findByEmail(user.getEmail()) != null) {
			response.setStatus("Email Already Exist!");
		} else {
			user.setPassword(encoder.encode(user.getPassword()));
			existingUser = modelMapper.map(user, User.class);
			userDao.save(existingUser);
		}
		return response;
	}
	
	public ApiResponse<?> addAdmin(SaveUserDto user) {
		// Encode password before saving the user
		// userInfo.setPassword(encoder.encode(userInfo.getPassword()));

		ApiResponse<String> response = new ApiResponse<>();

		User existingUser = new User();

		if (!(userDao.findByUserName(user.getUserName()).isEmpty()))
			response.setStatus("Username Already Exists!");
		else if (userDao.findByEmail(user.getEmail()) != null) {
			response.setStatus("Email Already Exist!");
		} else {
			user.setPassword(encoder.encode(user.getPassword()));
			existingUser = modelMapper.map(user, User.class);
			existingUser.setRole("ADMIN");
			userDao.save(existingUser);
		}
		return response;
	}
}
