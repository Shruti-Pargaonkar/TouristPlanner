package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entity.User;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
    private BCryptPasswordEncoder passwordEncoder;

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
		return userRepository.save(user);
	}

	@Override
	public User findUser(User user) {
		
		String email= user.getEmail();
		User newUser= userRepository.findByEmail(email);
		if(newUser!=null) {
			if (passwordEncoder.matches(user.getPassword(), newUser.getPassword())) {
				return newUser;
			}
		}
		return null;
	}
	
	@Override
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(Long id) {
		 return userRepository.findById(id);
	}

	@Override
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	
	
}