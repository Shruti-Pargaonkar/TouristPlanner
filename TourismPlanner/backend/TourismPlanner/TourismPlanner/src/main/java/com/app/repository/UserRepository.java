package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

	Users findByEmail(String email);

	Users findById(Long id);


}