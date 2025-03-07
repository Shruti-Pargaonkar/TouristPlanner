package com.app.service;

import java.util.List;

import com.app.entity.Booking;

public interface BookingServiceInterface {

	Booking AddBooking(Booking booking);

	List<Booking> getAllBooking();

	Booking getBookingById(int hotelId);

	List<Booking> getMyBookings(int userId);

	

	

}
