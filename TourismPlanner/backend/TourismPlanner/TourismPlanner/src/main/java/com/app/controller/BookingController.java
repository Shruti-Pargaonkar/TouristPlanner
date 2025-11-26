package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IBookingService;
import com.app.entity.Booking;
import com.app.entity.FlightBooking;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/book")
//@PreAuthorize("hasRole('USER')")
public class BookingController {
	@Autowired
	private IBookingService BookingServiceInterface;
		
	@PostMapping("/addHotelBooking")
	public ResponseEntity<Booking> AddBooking(@RequestBody Booking Booking)
	{
		Booking addBooking = BookingServiceInterface.AddBooking(Booking);
		return new ResponseEntity<Booking>(addBooking,HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Booking>> getBooking()
	{
		List<Booking> ListOfBooking = BookingServiceInterface.getAllBooking();
		return new ResponseEntity<List<Booking>>(ListOfBooking,HttpStatus.OK);
	}
	
	@GetMapping("/{HotelId}")
	public ResponseEntity<Booking> getBookingById(@PathVariable("HotelId") int HotelId)
	{
		Booking Hotelbook = BookingServiceInterface.getBookingById(HotelId);
		return new ResponseEntity<Booking>(Hotelbook,HttpStatus.OK);
	}

	
	@GetMapping("/myHotelBookings")
	public ResponseEntity<Object> showHotelBookings(@RequestParam int userId) {
		try {
			//int userId = (int) session.getAttribute("userId");
			List<Booking> myBookings = BookingServiceInterface.getMyBookings(userId);
			if (myBookings == null)
				throw new Exception();
			return ResponseEntity.status(HttpStatus.OK).body(myBookings);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body("No bookings found");
		}

	}
	
}
