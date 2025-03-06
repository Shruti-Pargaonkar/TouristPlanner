package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.FlightBooking;


import com.app.repository.FlightBookingRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FlightBookingService implements FlightBookingInterface {
	
	@Autowired
	private FlightBookingRepository FlightBookingRepository;

	@Override
	public FlightBooking AddFlightBooking(FlightBooking flightBooking) {
		FlightBooking addBooking=FlightBookingRepository.save(flightBooking);
		return addBooking;
		
	}

	@Override
	public FlightBooking getFlightDetailsById(int flightId) {
		return FlightBookingRepository.findById(flightId).get();
	}

	@Override
	public List<FlightBooking> getFlightBooking() {
		
		return FlightBookingRepository.findAll();
	}

	@Override
	public void deleteFlightBookingById(int flightId) {
		FlightBookingRepository.deleteById(flightId);
		
	}

	@Override
	public List<FlightBooking> getMyBookings(int userId) {
		// TODO Auto-generated method stub
		return FlightBookingRepository.findByUserId(userId);
	}

}
