package com.app.utils;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ApiResponse<T> {

	private String status="Success";
	
	private T data = null;
	
	public ApiResponse(T d){
		this.data = d;
	}
	
}
