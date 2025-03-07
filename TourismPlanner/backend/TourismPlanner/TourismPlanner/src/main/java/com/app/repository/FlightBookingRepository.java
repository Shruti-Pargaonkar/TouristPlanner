package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.FlightBooking;


public interface FlightBookingRepository extends JpaRepository<FlightBooking,Integer> {

	List<FlightBooking> findByUserId(int userId);

}
