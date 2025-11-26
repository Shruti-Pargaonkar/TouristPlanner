package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Booking;
import com.app.entity.FlightBooking;
import com.app.entity.FlightDetails;
import com.app.service.FlightBookingInterface;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("FlightBooking")
public class FlightBookingController {
	@Autowired
	private FlightBookingInterface FlightBookingInterface;
		
	@PostMapping("/add")
	public ResponseEntity<FlightBooking> AddFlightBooking(@RequestBody FlightBooking flightBooking)
	{
		FlightBooking addFlightBooking = FlightBookingInterface.AddFlightBooking(flightBooking);
		return new ResponseEntity<FlightBooking>(addFlightBooking,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/{FlightId}")
	public ResponseEntity<FlightBooking> getFlightDetailsById(@PathVariable("FlightId") int FlightId)
	{
		FlightBooking Flightbook = FlightBookingInterface.getFlightDetailsById(FlightId);
		return new ResponseEntity<FlightBooking>(Flightbook,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<FlightBooking>> getFlightBooking()
	{
		List<FlightBooking> ListOfFlightBooking = FlightBookingInterface.getFlightBooking();
		return new ResponseEntity<List<FlightBooking>>(ListOfFlightBooking,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{FlightId}")
	public ResponseEntity<Void> deleteFlightBookingById(@PathVariable("FlightId") int FlightId)
	{
		FlightBookingInterface.deleteFlightBookingById(FlightId);
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		}
	
	
	@GetMapping("/myFlightBookings")
	public ResponseEntity<Object> showFlightBookings(@RequestParam int userId) {
		try {
			//int userId = (int) session.getAttribute("userId");
			List<FlightBooking> myFlightBookings = FlightBookingInterface.getMyBookings(userId);
			if (myFlightBookings == null)
				throw new Exception();
			return ResponseEntity.status(HttpStatus.OK).body(myFlightBookings);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body("No bookings found");
		}

	}
	
}
