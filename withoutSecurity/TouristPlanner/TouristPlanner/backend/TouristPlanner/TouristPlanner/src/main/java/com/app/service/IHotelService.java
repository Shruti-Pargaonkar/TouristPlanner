package com.app.service;

import java.util.List;

import com.app.entity.Hotel;

public interface IHotelService {

	public Hotel addHotelDetails(Hotel hotel);

	public List<Hotel> getAllHotelDetails();

	public Hotel HotelService(Hotel hotel);
	


	void deleteHotelDetailsById(long hotelId);

	public Hotel getFlightDetailsById(long hotelId);

}
