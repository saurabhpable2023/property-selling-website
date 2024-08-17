package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SaveOrderDto;
import com.app.services.OrderService;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllOrders(){
		return ResponseEntity.ok(orderService.findAllOrder());
	}
	
	@PostMapping("/add/{userId}")
	public ResponseEntity<?> saveOrder(@RequestBody SaveOrderDto order, @PathVariable Long userId){
		return ResponseEntity.ok(orderService.addOrder(order, userId));
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getOrdersByUser(@PathVariable Long userId){
		return ResponseEntity.ok(orderService.findUsersOrder(userId));
	}
	
}
