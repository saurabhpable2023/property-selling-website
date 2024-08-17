package com.app.services;

import java.util.List;

import com.app.dto.SaveOrderDto;
import com.app.entities.Order;

public interface OrderService {
	
	String addOrder(SaveOrderDto order, Long userId);
	
	List<Order> findAllOrder();
	
	List<Order> findUsersOrder(Long userId);
	
}
