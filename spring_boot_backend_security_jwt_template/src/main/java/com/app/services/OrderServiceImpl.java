package com.app.services;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OrderDao;
import com.app.dao.UserDao;
import com.app.dto.SaveOrderDto;
import com.app.entities.Order;
import com.app.entities.User;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public String addOrder(SaveOrderDto order, Long userId) {
		Optional<User> user = userDao.findById(userId);
		
		Order newOrder = modelMapper.map(order, Order.class);
		newOrder.setUser(user.get());
		
		orderDao.save(newOrder);
		
		return "order added...";
	}

	@Override
	public List<Order> findAllOrder() {
		return orderDao.findAll();
	}

	@Override
	public List<Order> findUsersOrder(Long userId) {
		Optional<User> user = userDao.findById(userId);
	
		return orderDao.findByUser(user.get());
	}
	
	
	
	
}
