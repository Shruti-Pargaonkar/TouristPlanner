package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.FlightDetails;
import com.app.entity.Hotel;
import com.app.repository.HotelRepository;

@Service
public class HotelService implements IHotelService{

	@Autowired
	private HotelRepository hotelRepository;

	@Override
	public Hotel addHotelDetails(Hotel hotel) {
		Hotel addedHotel=hotelRepository.save(hotel);
		return addedHotel;
	}

	@Override
	public List<Hotel> getAllHotelDetails() {
		
		return hotelRepository.findAll();
	}
	

	

	@Override
	public void deleteHotelDetailsById(long hotelId) {
		hotelRepository.deleteById(hotelId);
		
	}

	@Override
	public Hotel getFlightDetailsById(long hotelId) {
		// TODO Auto-generated method stub
		return hotelRepository.findById(hotelId).get();
	}

	public Hotel HotelService(Hotel hotel) {
		Hotel existingHotelDetails = hotelRepository.findById(hotel.getHotelid()).get();
		existingHotelDetails.setLocation(hotel.getLocation());
		existingHotelDetails.setDescription(hotel.getDescription());
		existingHotelDetails.setEmailid(hotel.getEmailid());
		existingHotelDetails.setPriceperday(hotel.getPriceperday());
		existingHotelDetails.setTotalroom(hotel.getTotalroom());
		Hotel updatedHotelDetails = hotelRepository.save(existingHotelDetails);
        return updatedHotelDetails;
	}

	
	
}
