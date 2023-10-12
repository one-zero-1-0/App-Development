package com.blooddonation.main.constant;


import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String AUTH = "/api/v1/auth";
    public static final String USER = "/api/v1/user";
    public static final String DONOR = "/api/v1/donor";
    public static final String RECEPIENT = "/api/v1/recepient";
    public static final String PROFILE = "/api/v1/profile";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}