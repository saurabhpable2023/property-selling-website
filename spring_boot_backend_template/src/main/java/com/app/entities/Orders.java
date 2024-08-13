package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Orders extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name = "property_id")
	private Property propertyId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User userId;
	
	@Column(name = "property")
	private double propertyPrice;
	
	@Column(name = "status")
	private int orderStatus;
}
