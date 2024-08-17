package com.app.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ImagesDao;
import com.app.dao.PropertyDao;
import com.app.dto.ImageDTORequest;
import com.app.dto.ImageDTOResponse;
import com.app.entities.Images;
import com.app.entities.Property;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class ImageServiceImpl implements ImageService{

	@Autowired
	private ImagesDao imageDao;
	
	@Autowired
	private PropertyDao propertyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public String addNewImageProperty(@Valid ImageDTORequest imageBody, Long propertyId) {
		Property p= propertyDao.findById(propertyId).orElseThrow((()->new ResourceNotFoundException("Invalid Property Id Given")));
		MultipartFile[] images= imageBody.getImageLink();
		for (MultipartFile image : images) {
			Images img=mapper.map(image, Images.class);
			img.setName(image.getOriginalFilename());
			img.setProperty(p);
			String folderPath = "src/main/resources/static/"+propertyId+"/";
			String link =folderPath+image.getOriginalFilename();
			try {

				FileUtils.writeByteArrayToFile(new File(link), image.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			}
			img.setImageLink(image.getOriginalFilename());
			imageDao.save(img);
			refreshDirectory(folderPath);
			
		}
		return "Image Added Successfully";
	}
	
	private void refreshDirectory(String directoryPath) {
	    try {
	        Path dir = Paths.get(directoryPath);
	        Files.newDirectoryStream(dir);
	        System.out.println("Refresh Done");
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}

	@Override
	public List<ImageDTOResponse> SeachImagesByProperty(Long propertyId) throws IOException {
		Property p= propertyDao.findById(propertyId).orElseThrow((()->new ResourceNotFoundException("Invalid Property Id Given")));
		List<Images> imgList=imageDao.findByProperty(p);
		List<ImageDTOResponse> imgDList = new ArrayList<ImageDTOResponse>();
		String folderPath = "src/main/resources/static/"+propertyId+"/";
		for (Images image : imgList) {
			ImageDTOResponse img=mapper.map(image, ImageDTOResponse.class);
			File imgFile = FileUtils.getFile(folderPath+img.getImageLink());
			byte[] imgFileBytearr = FileUtils.readFileToByteArray(imgFile);
			String encoded = Base64.getEncoder().encodeToString(imgFileBytearr);
			img.setImageData(encoded);
			imgDList.add(img);
		}
		return imgDList;
	}
	
	@Override
	public String DeletePropertyImages(Long imageId) {
		Images img=imageDao.findById(imageId).orElseThrow((()->new ResourceNotFoundException("Invalid Image Id Given")));
		imageDao.delete(img);
		return "Image has Been Removed";
	}
	
}
