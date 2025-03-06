package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BookingServiceInterface;
import com.app.entity.Booking;
import com.app.entity.FlightBooking;



@RestController
@RequestMapping("Book")
public class BookingController {
	@Autowired
	private BookingServiceInterface bookingServiceInterface;
		
	@PostMapping("/addHotelBooking")
	public ResponseEntity<Booking> AddBooking(@RequestBody Booking Booking)
	{
		Booking addBooking = bookingServiceInterface.AddBooking(Booking);
		return new ResponseEntity<Booking>(addBooking,HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Booking>> getBooking()
	{
		List<Booking> listOfBooking = bookingServiceInterface.getAllBooking();
		if (listOfBooking.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
//		List<Booking> ListOfBooking = bookingServiceInterface.getAllBooking();
		return new ResponseEntity<List<Booking>>(listOfBooking,HttpStatus.OK);
	}
	
	@GetMapping("/{bookingId}")
	public ResponseEntity<Booking> getBookingById(@PathVariable int bookingId)
	{
		
		Booking Hotelbook = bookingServiceInterface.getBookingById(bookingId);
		return new ResponseEntity<Booking>(Hotelbook,HttpStatus.OK);
	}

	
	@GetMapping("/myHotelBookings")
	public ResponseEntity<Object> showHotelBookings(@RequestParam int userId) {
		try {
			//int userId = (int) session.getAttribute("userId");
			List<Booking> myBookings = bookingServiceInterface.getMyBookings(userId);
			if (myBookings == null)
				throw new Exception();
			return ResponseEntity.status(HttpStatus.OK).body(myBookings);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body("No bookings found");
		}

	}
	
}
