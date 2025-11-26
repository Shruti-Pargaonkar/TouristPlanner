package com.app.service;

import java.util.List;

import com.app.entity.FlightDetails;

public interface FlightDetailsServiceinterface {

	

	public FlightDetails AddFlightDetails(FlightDetails flightDetails);

	public List<FlightDetails> getAllFlightDetails();

	public FlightDetails getFlightDetailsById(long flightId);

	public void deleteFlightDetailsById(long flightId);

	public List<FlightDetails> getFlightsBySourceAndDestination(String source, String destination, String date);

	public FlightDetails FlightDetailsService(FlightDetails flightDetails);
}
	
	
