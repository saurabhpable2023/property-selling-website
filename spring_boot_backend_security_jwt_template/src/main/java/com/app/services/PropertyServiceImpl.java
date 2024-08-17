package com.app.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import jakarta.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dao.PropertyDao;
import com.app.dao.TagDao;
import com.app.dao.UserDao;
import com.app.dto.PropertyRequest;
import com.app.dto.PropertyResponse;
import com.app.dto.PropertyResponsePaginated;
import com.app.dto.TagsDTORequest;
import com.app.entities.Address;
import com.app.entities.Property;
import com.app.entities.Tag;
import com.app.entities.User;

@Service
@Transactional
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	PropertyDao propertyDao;

	@Autowired
	UserDao userDao;

	@Autowired
	TagDao tagDao;

	@Autowired
	private AddressDao addressDao;

	@Autowired
	ModelMapper mapper;

	@Override
	public PropertyResponse addNewProperty(PropertyRequest request, Long Userid) {
		System.out.println(request);
		Property p = mapper.map(request, Property.class);
		Set<TagsDTORequest> tagDTO = request.getTags();
		Set<Tag> tags = new HashSet<Tag>();
		User u = userDao.findById(Userid).orElseThrow((() -> new ResourceNotFoundException("Invalid Id Given")));
		Address a = new Address(request.getAddress().getAddressLine1(), request.getAddress().getAddressLine2(),
				request.getAddress().getCity().toLowerCase(), request.getAddress().getDistrict(),
				request.getAddress().getState().toLowerCase(), request.getAddress().getPincode(), p);
		p.setAddress(a);
		p.setUser(u);
		p.setSold(false);
		;
		p.setDeleted(false);
		List<Tag> tagsList = tagDao.findAll();
		for (TagsDTORequest tag : tagDTO) {
			Tag t = mapper.map(tag, Tag.class);
			if (tagsList.contains(t)) {
				int index = tagsList.indexOf(t);
				Tag t1 = tagsList.get(index);

				t1.getProperties().add(p);
				tags.add(t1);
				System.out.println(tags);
			} else {
				t.getProperties().add(p);
				tags.add(t);
			}
		}
		p.setTags(tags);
		Property savedProp = propertyDao.save(p);
		return mapper.map(savedProp, PropertyResponse.class);
	}

	@Override
	public List<PropertyResponse> seachProductByUser(Long Userid) {
		User u = userDao.findById(Userid).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
		List<Property> plist = propertyDao.findByUser(u);
		List<PropertyResponse> prlist = new ArrayList<PropertyResponse>();
		for (Property property : plist) {
			if (!property.isDeleted()) {
				PropertyResponse pr = mapper.map(property, PropertyResponse.class);
				pr.setOwner(property.getUser().getFirstName() + " " + property.getUser().getLastName());
				prlist.add(pr);
			}
		}
		return prlist;
	}

	@Override
	public PropertyResponsePaginated getAll(int page, int size) {
		Pageable pageable = PageRequest.of(page, size);
		Page<Property> propertyPage = propertyDao.findAll(pageable);
		List<Property> plist = propertyDao.findAll(pageable).getContent();
		List<PropertyResponse> prlist = new ArrayList<PropertyResponse>();
		for (Property property : plist) {
			PropertyResponse pr = mapper.map(property, PropertyResponse.class);
			if (!property.isDeleted()) {
				pr.setOwner(property.getUser().getFirstName() + " " + property.getUser().getLastName());
				prlist.add(pr);
			}
		}
		int totalPages = propertyPage.getTotalPages();
		return new PropertyResponsePaginated(prlist, totalPages);
	}

	@Override
	public PropertyResponse getById(Long id) {
		Property property = propertyDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		PropertyResponse pr = mapper.map(property, PropertyResponse.class);
		pr.setUserid(property.getUser().getId());
		pr.setOwner(property.getUser().getFirstName() + " " + property.getUser().getLastName());
		return pr;
	}

	@Override
	public String deleteProperty(Long id) {
		Property p = propertyDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		p.setDeleted(true);
		propertyDao.save(p);
		return "Delete Success";
	}

	@Override
	public String updatePropertyDetails(PropertyRequest request, Long id) {
		Property p = propertyDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		Address a = addressDao.findByProperty(p);
		Set<TagsDTORequest> tagDTO = request.getTags();
		Set<Tag> tags = p.getTags();
		// Removing Existing Tags from Property & Vice Versa
		for (Tag tags2 : tags) {
			Optional<Tag> t = tagDao.findByTagName(tags2.getTagName());
			t.get().getProperties().remove(p);
		}
		p.setTags(new HashSet<Tag>());
		a.setAddressLine1(request.getAddress().getAddressLine1());
		a.setAddressLine2(request.getAddress().getAddressLine2());
		a.setCity(request.getAddress().getCity());
		a.setDistrict(request.getAddress().getDistrict());
		a.setState(request.getAddress().getState());
		a.setPincode(request.getAddress().getPincode());
		p.setAddress(a);
		p.setTitle(request.getTitle());
		p.setDescription(request.getDescription());
		p.setPropertyType(request.getPropertyType());
		p.setBedrooms(request.getBedrooms());
		p.setBathrooms(request.getWashrooms());
		p.setPrice(request.getPrice());
		List<Tag> tagsList = tagDao.findAll();
		for (TagsDTORequest tag : tagDTO) {
			System.out.println("Gone in Loop for " + tag);
			System.out.println(tag.getTagName());
			Tag t = mapper.map(tag, Tag.class);
			int index = tagsList.indexOf(t);
			Tag t1 = tagsList.get(index);
			System.out.println("hello : " + tag);
			System.out.println(t1.getTagName() + " " + t1.getDescription());
			System.out.println(t1.getProperties());
			t1.getProperties().add(p);
			tags.add(t1);
			System.out.println("Added in Set-Tags");
			System.out.println(tags);
		}
		p.setTags(tags);
		propertyDao.save(p);
		return "Update Done";
	}

}
