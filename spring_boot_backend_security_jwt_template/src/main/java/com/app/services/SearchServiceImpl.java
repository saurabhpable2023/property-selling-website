package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.PropertyDao;
import com.app.dao.TagDao;
import com.app.dao.UserDao;
import com.app.dto.PropertyResponse;
import com.app.entities.Address;
import com.app.entities.Property;
import com.app.entities.Tag;
import com.app.entities.User;
import com.app.utils.ApiResponse;

@Service
@Transactional
public class SearchServiceImpl implements SearchService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PropertyDao propertyDao;

	@Autowired
	private AddressDao addressDao;

	@Autowired
	private TagDao tagDao;

	@Override
	public ApiResponse<List<PropertyResponse>> searchByCityName(String cityName) {
		ApiResponse<List<PropertyResponse>> response = new ApiResponse<>();
		String city = cityName.toLowerCase();

		List<Address> addressList = addressDao.findByCity(city);
		List<PropertyResponse> propertyList = new ArrayList<>();

		for (Address address : addressList) {
			Property proper = propertyDao.findByAddress(address);
			if (!proper.isDeleted()) {
				PropertyResponse res = new PropertyResponse();
				res.setId(proper.getId());
				res.setTitle(proper.getTitle());
				res.setDescription(proper.getDescription());
				res.setPrice((float) proper.getPrice());
				res.setOwner(proper.getUser().getFirstName() + " " + proper.getUser().getLastName());

				propertyList.add(res);
			}
		}

		response.setData(propertyList);
		if (propertyList.size() == 0) {
			response.setStatus("No Properties Found!!!");
		}
		return response;
	}

	@Override
	public ApiResponse<List<PropertyResponse>> searchByTagName(String tagName) {

		ApiResponse<List<PropertyResponse>> response = new ApiResponse<>();
		List<PropertyResponse> propRes = new ArrayList<>();
		Optional<Tag> tag = tagDao.findByTagName(tagName);
		if (tag.isEmpty()) {
			response.setStatus("No Properties Found!");
			return response;
		}
		if (tag.get().getProperties().size() > 0) {
			for (Property proper : tag.get().getProperties()) {
				if (!proper.isDeleted()) {
					PropertyResponse res = new PropertyResponse();
					res.setId(proper.getId());
					res.setTitle(proper.getTitle());
					res.setDescription(proper.getDescription());
					res.setPrice((float) proper.getPrice());
					res.setOwner(proper.getUser().getFirstName() + " " + proper.getUser().getLastName());
					propRes.add(res);
				}
			}
			response.setData(propRes);
		} else {
			response.setStatus("No Properties Found!");
		}

		return response;
	}

	@Override
	public ApiResponse<List<PropertyResponse>> searchByPropertyName(String propertyName) {
		ApiResponse<List<PropertyResponse>> response = new ApiResponse<>();

		List<Property> daoProp = propertyDao.findByTitle(propertyName);
		List<PropertyResponse> propRes = new ArrayList<>();

		if (daoProp.size() == 0) {
			response.setStatus("No Properties Found!");
			return response;
		}

		for (Property proper : daoProp) {
			PropertyResponse res = new PropertyResponse();
			if (!proper.isDeleted()) {
				res.setId(proper.getId());
				res.setTitle(proper.getTitle());
				res.setDescription(proper.getDescription());
				res.setPrice((float) proper.getPrice());
				res.setOwner(proper.getUser().getFirstName() + " " + proper.getUser().getLastName());
				propRes.add(res);
			}
		}
		response.setData(propRes);

		return response;
	}

	@Override
	public ApiResponse<List<PropertyResponse>> searchByUsername(String userName) {
		Optional<User> user = userDao.findByUserName(userName);
		ApiResponse<List<PropertyResponse>> response = new ApiResponse<>();

		if (user.isEmpty()) {
			response.setStatus("No Properties Found!");
			return response;
		}

		List<Property> daoProp = propertyDao.findByUser(user.get());
		List<PropertyResponse> propRes = new ArrayList<>();

		for (Property proper : daoProp) {
			if (!proper.isDeleted()) {
				PropertyResponse res = new PropertyResponse();
				res.setId(proper.getId());
				res.setTitle(proper.getTitle());
				res.setDescription(proper.getDescription());
				res.setPrice((float) proper.getPrice());
				res.setOwner(proper.getUser().getFirstName() + " " + proper.getUser().getLastName());
				propRes.add(res);
			}
		}
		response.setData(propRes);

		return response;
	}

	@Override
	public ApiResponse<List<PropertyResponse>> searchByStateName(String stateName) {
		ApiResponse<List<PropertyResponse>> response = new ApiResponse<>();
		String state = stateName.toLowerCase();

		List<Address> addressList = addressDao.findByState(state);
		List<PropertyResponse> propertyList = new ArrayList<>();

		for (Address address : addressList) {
			Property proper = propertyDao.findByAddress(address);
			if (!proper.isDeleted()) {
				PropertyResponse res = new PropertyResponse();
				res.setId(proper.getId());
				res.setTitle(proper.getTitle());
				res.setDescription(proper.getDescription());
				res.setPrice((float) proper.getPrice());
				res.setOwner(proper.getUser().getFirstName() + " " + proper.getUser().getLastName());

				propertyList.add(res);
			}
		}

		response.setData(propertyList);
		if (propertyList.size() == 0) {
			response.setStatus("No Properties Found!!!");
		}
		return response;
	}

}
