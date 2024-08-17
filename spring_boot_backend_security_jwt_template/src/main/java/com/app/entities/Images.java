package com.app.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "images")
public class Images extends BaseEntity{
	private String name;
	
	@ManyToOne
	private Property property;
	@Column(length = 255)
	private String imageLink;
	
}