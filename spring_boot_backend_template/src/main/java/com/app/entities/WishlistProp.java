package com.app.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "wish_list")
@Getter
@Setter
public class WishlistProp extends BaseEntity {
	//wishlistprop *--> 1 user
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	User userId;
	//wishlistprop * --> 1 property
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="property_id")
	Property proertyId;
	
}
