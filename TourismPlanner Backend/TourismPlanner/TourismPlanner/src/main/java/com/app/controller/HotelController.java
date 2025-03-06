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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.Exception.HotelNotFoundException;
import com.app.entity.FlightDetails;
import com.app.entity.Hotel;
import com.app.repository.HotelRepository;
import com.app.service.FlightDetailsService;
import com.app.service.HotelService;
import com.app.service.IHotelService;

@RestController
@RequestMapping("/hotel")
public class HotelController {

@Autowired
private IHotelService hotelService;
	
	@PostMapping("/addhoteldetail")	
	public ResponseEntity<Hotel> addHotelDetails(@RequestBody Hotel hotel){
		
		Hotel hoteladded=hotelService.addHotelDetails(hotel);
		return new ResponseEntity<Hotel>(hoteladded,HttpStatus.CREATED);
	}
	
	@GetMapping("/getallhoteldetails")	
	public ResponseEntity<List<Hotel>> getAllHotelDetails(){
		List<Hotel> listofHotel=hotelService.getAllHotelDetails();
		return new ResponseEntity<List<Hotel>>(listofHotel, HttpStatus.OK);
	}
	@GetMapping("/HotelDetails/{HotelId}")
	public ResponseEntity<Hotel> getHotelDetailsById(@PathVariable("HotelId") long HotelId)
	{
		Hotel hotel = hotelService.getFlightDetailsById(HotelId);
		return new ResponseEntity<Hotel>(hotel,HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{HotelId}")
	public ResponseEntity<Void> deleteHotelDetailsById(@PathVariable("HotelId") long HotelId)
	{
		hotelService.deleteHotelDetailsById(HotelId);
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		}
	
	@Autowired
	private HotelService HotelService;

	 @PutMapping("/update/{id}")
	    public ResponseEntity<Hotel> HotelService(@PathVariable("id") Long Id,
	                                           @RequestBody Hotel Hotel){
		 Hotel.setHotelid(Id);
		 Hotel updatedHotel = HotelService.HotelService(Hotel);
	        return new ResponseEntity<>(updatedHotel, HttpStatus.OK);
	    }
	 
	 @ExceptionHandler(HotelNotFoundException.class)
	    @ResponseStatus(HttpStatus.NOT_FOUND)
	    public ResponseEntity<String> handleHotelNotFoundException(HotelNotFoundException ex) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
	    }


}
