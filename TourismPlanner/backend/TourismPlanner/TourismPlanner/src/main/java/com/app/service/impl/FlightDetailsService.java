package com.app.service.impl;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.app.Exception.FlightNotFoundException;
import com.app.entity.FlightDetails;
import com.app.repository.FlightDetailsRepository;
import com.app.service.IFlightDetailsService;
@Service
public class FlightDetailsService implements IFlightDetailsService {

	@Autowired
	private FlightDetailsRepository FlightDetailsRepository;

	@Override
	public FlightDetails AddFlightDetails(FlightDetails flightDetails) {
		FlightDetails addDetails=FlightDetailsRepository.save(flightDetails);
		return addDetails;

	}
	@Override
	public List<FlightDetails> getFlightsBySourceAndDestination(String source, String destination, String date) {
		return FlightDetailsRepository.findBySourceAndDestinationAndDate(source, destination, date);
	}



	@Override
	public List<FlightDetails> getAllFlightDetails() {
		
		return FlightDetailsRepository.findAll() ;
	}

	@Override
	public FlightDetails getFlightDetailsById(long flightId) {
		
		return FlightDetailsRepository.findById(flightId).get();
	}

	@Override
	public void deleteFlightDetailsById(long flightId) {
		FlightDetailsRepository.deleteById(flightId);
	}

//	 public List<FlightDetails> getFlightsBySourceAndDestination(String source, String destination) {
//	        return FlightDetailsRepository.findBySourceAndDestination(source, destination);
//	    }


//	public List<FlightDetails> getFlightsBySourceAndDestination(String source, String destination, String date) {
//		// TODO Auto-generated method stub
//		return FlightDetailsRepository.findBySourceAndDestination(source, destination);
//	}
	
	public FlightDetails updateFlightDetails(FlightDetails flightDetails) {
		FlightDetails existingFlightDetails = FlightDetailsRepository.findById(flightDetails.getId()).get();
		existingFlightDetails.setName(flightDetails.getName());
		existingFlightDetails.setSource(flightDetails.getSource());
		existingFlightDetails.setDestination(flightDetails.getDestination());
		existingFlightDetails.setCapacity(flightDetails.getCapacity());
		existingFlightDetails.setDate(flightDetails.getDate());
		existingFlightDetails.setPrice(flightDetails.getPrice());
		FlightDetails updatedFlightDetails = FlightDetailsRepository.save(existingFlightDetails);
        return updatedFlightDetails;
	}

	

	

	

	

}
