package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/registration")
public class RegistrationController {

	@Autowired
	private UserService userService;
	
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	//to redirect user to register form
	@GetMapping
    public String showRegistrationForm() {
        return "register";
    }

	@PostMapping
	public ResponseEntity<Object> addUser(@RequestBody User user) {
		try {
			User newuser = userService.addUser(user);
			return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User registration failed");
		}

	}
	
	@GetMapping("/getalluser")	
	public ResponseEntity<List<User>> getAllUser(){
		List<User> listofUser=userService.getAllUser();
		return new ResponseEntity<List<User>>(listofUser, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
	
//	@GetMapping("/user/{custId}")
//	public User getUserById(@PathVariable("custId") Long id) {
//		User foundCustomer = userService.getUserById(id);
//		return foundCustomer;
//		}
	
	@GetMapping("getuser/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }


}