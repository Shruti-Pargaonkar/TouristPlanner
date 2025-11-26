package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.FlightBooking;
import com.app.entity.FlightDetails;

public interface FlightDetailsRepository extends JpaRepository<FlightDetails,Long>{
	List<FlightDetails> findBySourceAndDestination(String source, String destination);

	


		
	

}
