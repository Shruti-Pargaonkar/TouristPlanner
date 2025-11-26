package com.app.service;

import java.util.List;

import com.app.entity.Users;

public interface IUserService {


	Users addUser(Users user);

	Users findUser(Users user);

	List<Users> getAllUser();

	Users getUserById(Long id);

	Users getUserByEmail(String email);

//	Users findByEmail(String email);
}
