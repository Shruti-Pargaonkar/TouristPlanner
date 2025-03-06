package com.app.service;

import java.util.List;

import com.app.entity.FlightBooking;

public interface FlightBookingInterface {

	FlightBooking AddFlightBooking(FlightBooking flightBooking);

	List<FlightBooking> getFlightBooking();

	FlightBooking getFlightDetailsById(int flightId);

	void deleteFlightBookingById(int flightId);

	List<FlightBooking> getMyBookings(int userId);

	

	

}
