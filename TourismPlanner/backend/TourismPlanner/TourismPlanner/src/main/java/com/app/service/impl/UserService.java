package com.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entity.Users;
import com.app.repository.UserRepository;
import com.app.service.IUserService;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
    private BCryptPasswordEncoder passwordEncoder;

	@Override
	public Users addUser(Users user) {
		// TODO Auto-generated method stub
		String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
		return userRepository.save(user);
	}

	@Override
	public Users findUser(Users user) {
		
		String email= user.getEmail();
		Users newUser= userRepository.findByEmail(email);
		if(newUser!=null) {
			if (passwordEncoder.matches(user.getPassword(), newUser.getPassword())) {
				return newUser;
			}
		}
		return null;
	}
	
	@Override
	public List<Users> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public Users getUserById(Long id) {
		 return userRepository.findById(id);
	}

	@Override
	public Users getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	

	
	
}