package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Booking;


public interface BookingRepository extends JpaRepository<Booking,Integer>{

	List<Booking> findByUserId(int userId);
	

} 
