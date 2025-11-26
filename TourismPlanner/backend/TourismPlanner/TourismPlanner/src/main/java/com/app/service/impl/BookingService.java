package com.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Booking;
import com.app.entity.FlightDetails;
import com.app.repository.BookingRepository;
import com.app.service.IBookingService;

@Service
public class BookingService implements IBookingService{

	@Autowired
	private BookingRepository BookingRepository;

	@Override
	public Booking AddBooking(Booking Booking) {
		Booking addBooking=BookingRepository.save(Booking);
		return addBooking;
		
	}

	@Override
	public List<Booking> getAllBooking() {
		
		return BookingRepository.findAll();
	}

	

	

	@Override
	public Booking getBookingById(int hotelId) {
		return BookingRepository.findById(hotelId).get();
	}

	@Override
	public List<Booking> getMyBookings(int userId) {
		// TODO Auto-generated method stub
		return BookingRepository.findByUserId(userId);
	}

	

	

	

	
	
	

}
