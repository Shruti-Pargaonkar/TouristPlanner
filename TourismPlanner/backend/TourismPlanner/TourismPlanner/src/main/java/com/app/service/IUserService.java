package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {


	User addUser(User user);

	User findUser(User user);

	List<User> getAllUser();

	User getUserById(Long id);

	User getUserByEmail(String email);
}
