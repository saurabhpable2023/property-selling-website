package com.app.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import jakarta.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.PropertyDao;
import com.app.dao.UserDao;
import com.app.dto.ResetPasswordDto;
import com.app.dto.SaveUserDto;
import com.app.entities.Property;
import com.app.entities.User;
import com.app.utils.ApiResponse;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PropertyDao propertyDao;

	@Autowired
	private ModelMapper modelMapper;
	
	private PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public ApiResponse<?> addNewUser(SaveUserDto user) {

		ApiResponse<String> response = new ApiResponse<>();

		User existingUser = new User();

		
		if(userDao.findByUserName(user.getUserName()) != null)
			response.setStatus("Username Already Exists!");
		else if (userDao.findByEmail(user.getEmail()) != null) {
			response.setStatus("Email Already Exist!");
		} else {
			existingUser = modelMapper.map(user, User.class);
			userDao.save(existingUser);
		}
		return response;
	}

	@Override
	public ApiResponse<?> loginUser(String username, String password) {
		ApiResponse<User> res = new ApiResponse<>();

		Optional<User> user = userDao.findByUserName(username);

		if (user.isEmpty()) {
			res.setStatus("User does not exist!");
			return res;
		}
		if(user.get().isDeleted()) {
			res.setStatus("User Does Not Exist!!!");
			return res;
		}
		if (encoder().matches(password, user.get().getPassword())) {
			res.setData(user.get());
		} else {
			res.setStatus("User and Password does not match");
		}

		return res;
	}

	@Override
	public ApiResponse<?> findByUsername(String username) {
		ApiResponse<User> response = new ApiResponse<>();
		Optional<User> user = userDao.findByUserName(username);
		if(user.isPresent()) {
			response.setData(user.get());
		}else {
			response.setStatus("User Not Found!");
		}
		return response;
	}

	@Override
	public ApiResponse<?> findUserById(Long id) {
		ApiResponse<User> response = new ApiResponse<>();
		Optional<User> user = userDao.findById(id);
		if(user.isPresent()) {
			response.setData(user.get());
		}else {
			response.setStatus("User Not Found!");
		}
		return response;
	}

	@Override
	public ApiResponse<?> changePassword(ResetPasswordDto data, String username) {
		
		ApiResponse<String> response = new ApiResponse<>();
		
		Optional<User> user = userDao.findByUserName(username);
		
		if(encoder().matches(data.getOldPassword(), user.get().getPassword())) {
			user.get().setPassword(encoder().encode(data.getNewPassword()));
			response.setData("Password Changed!!!");
			userDao.save(user.get());
		}else {
			response.setStatus("Password Can't be changed!!!");
		}
		
		return response;
	};
	
	@Override
	public String uploadProfilePicture(Long userId, MultipartFile file) {
		System.out.println("in upload service impl");
		User user = userDao.findById(userId)
	                .orElseThrow(() -> new RuntimeException("User not found"));
	        try {
	            byte[] imageData = file.getBytes();
	            System.out.println("In the upload profile function");
	            user.setProfilePic(imageData);
	            userDao.save(user);
	            return "Profile picture uploaded successfully.";
	        } catch (IOException e) {
	            throw new RuntimeException("Failed to upload profile picture", e);
	        }
	}
	
	@Override
	public List<User> getAll() {
		List<User> userList = userDao.findAll();
		return userList.stream().filter(n -> n.isDeleted()==false && n.getRole().equals("USER"))
		        .collect(Collectors.toList());
	}
	
	@Override
	public String DeleteUser(Long userId) {
		Optional<User> user = userDao.findById(userId);
		if(user.isPresent()) {
			List<Property> prlist=propertyDao.findByUser(user.get());
			for (Property property : prlist) {
				property.setDeleted(true);
				propertyDao.save(property);
			}
			user.get().setDeleted(true);
			userDao.save(user.get());
			return "Profile Deleted";
		}else {
			return "Faced Some Issue";
		}
		
	}
	
	@Override
	public ApiResponse<?> loginAdmin(String username, String password) {
		ApiResponse<User> res = new ApiResponse<>();

		Optional<User> user = userDao.findByUserName(username);

		if (user.isEmpty()) {
			res.setStatus("User does not exist!");
			return res;
		}
		if (encoder().matches(password, user.get().getPassword()) && user.get().getRole().equals("ADMIN")) {
			res.setData(user.get());
		} else {
			res.setStatus("User and Password does not match");
		}

		return res;
	}

	@Override
	public String updateUser(Long userId, SaveUserDto user) {
		User user2 = userDao.findById(userId).orElseThrow(()-> new RuntimeException("User Not Found"));
			
		try {
			user2.setFirstName(user.getFirstName());
			user2.setLastName(user.getLastName());
			user2.setCity(user.getCity());
			user2.setState(user.getState());
			user2.setDob(user.getDob());
			user2.setPhoneNumber(user.getPhoneNumber());
			userDao.save(user2);
			return "User updated Successfully";
		} catch (Exception e) {
            throw new RuntimeException("Failed to upload profile picture", e);
        }
		
	}
}

