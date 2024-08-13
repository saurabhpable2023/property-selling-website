package com.app.dto;

public class SignUpResponse {
    private String token;
    private String message;

    public SignUpResponse(String token, String message) {
        this.token = token;
        this.message = message;
    }

    // Getters and Setters
}
