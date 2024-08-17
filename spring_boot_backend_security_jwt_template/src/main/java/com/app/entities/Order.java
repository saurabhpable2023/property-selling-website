package com.app.entities;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "orders")
public class Order extends BaseEntity {

	@Column
	private int propertyId;
	
	@Column
	private int orderStatus;
	
	@Column
	private int orderAmount;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "users_id")
	private User user;
}
