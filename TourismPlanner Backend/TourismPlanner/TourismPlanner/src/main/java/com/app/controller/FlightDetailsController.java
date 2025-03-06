package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.Exception.FlightNotFoundException;
import com.app.entity.FlightDetails;
import com.app.service.FlightDetailsService;
import com.app.service.FlightDetailsServiceinterface;
import com.app.repository.FlightDetailsRepository;

	

@RestController
@RequestMapping("app")
public class FlightDetailsController {
	
	@Autowired
	private FlightDetailsServiceinterface FlightDetailsServiceinterface;
		
	@PostMapping("/test3")
	public ResponseEntity<FlightDetails> AddFlightDetails(@RequestBody FlightDetails flightDetails)
	{
		FlightDetails addflightDetails = FlightDetailsServiceinterface.AddFlightDetails(flightDetails);
		return new ResponseEntity<FlightDetails>(addflightDetails,HttpStatus.CREATED);
	}
	
	@ExceptionHandler(FlightNotFoundException.class)
    public ResponseEntity<String> handleFlightNotFoundException(FlightNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
	
	@GetMapping("/all")
	public ResponseEntity<List<FlightDetails>> getAllFlightDetails()
	{
		List<FlightDetails> ListOfFlightDetails = FlightDetailsServiceinterface.getAllFlightDetails();
		return new ResponseEntity<List<FlightDetails>>(ListOfFlightDetails,HttpStatus.OK);
	}
	
	
	@GetMapping("/FlightDetails/{id}")
	public ResponseEntity<FlightDetails> getFlightDetailsById(@PathVariable long id) {
	    FlightDetails flightDetail = FlightDetailsServiceinterface.getFlightDetailsById(id);
	    return new ResponseEntity<>(flightDetail, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{FlightId}")
	public ResponseEntity<Void> deleteFlightDetailsById(@PathVariable("FlightId") long FlightId)
	{
		FlightDetailsServiceinterface.deleteFlightDetailsById(FlightId);
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		}
	
	

	@Autowired
	private FlightDetailsService FlightDetailsService;

	 @PutMapping("/update/{id}")
	    public ResponseEntity<FlightDetails> FlightDetailsService(@PathVariable("id") Long Id,
	                                           @RequestBody FlightDetails FlightDetails){
		 FlightDetails.setId(Id);
		 FlightDetails updatedUser = FlightDetailsService.FlightDetailsService(FlightDetails);
	        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	    }

	

	    @GetMapping("/flights")
	    public ResponseEntity<List<FlightDetails>> getFlights(
	            @RequestParam String source,
	            @RequestParam String destination,
	            @RequestParam String date) {
	        List<FlightDetails> flights = FlightDetailsServiceinterface.getFlightsBySourceAndDestination(source, destination, date);
	        return new ResponseEntity<>(flights, HttpStatus.OK);
	    }
	 

    
	    
	    
	    
	
	
	
	

}	
