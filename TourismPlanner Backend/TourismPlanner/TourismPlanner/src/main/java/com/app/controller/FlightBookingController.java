package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entity.FlightBooking;
import com.app.service.FlightBookingInterface;

@RestController
@RequestMapping("/FlightBooking")
public class FlightBookingController {
    @Autowired
    private FlightBookingInterface flightBookingService;

    @PostMapping("/add")
    public ResponseEntity<FlightBooking> addFlightBooking(@RequestBody FlightBooking flightBooking) {
        FlightBooking addFlightBooking = flightBookingService.AddFlightBooking(flightBooking);
        return new ResponseEntity<>(addFlightBooking, HttpStatus.CREATED);
    }

    @GetMapping("/{FlightId}")
    public ResponseEntity<Object> getFlightDetailsById(@PathVariable("FlightId") int flightId) {
        try {
            FlightBooking flightBook = flightBookingService.getFlightDetailsById(flightId);
            return new ResponseEntity<>(flightBook, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Flight booking not found for ID: " + flightId);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<FlightBooking>> getFlightBooking() {
        List<FlightBooking> listOfFlightBooking = flightBookingService.getFlightBooking();
        return new ResponseEntity<>(listOfFlightBooking, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{FlightId}")
    public ResponseEntity<String> deleteFlightBookingById(@PathVariable("FlightId") int flightId) {
        try {
            flightBookingService.deleteFlightBookingById(flightId);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Flight booking deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Flight booking not found for ID: " + flightId);
        }
    }

    @GetMapping("/myFlightBookings")
    public ResponseEntity<Object> showFlightBookings(@RequestParam int userId) {
        List<FlightBooking> myFlightBookings = flightBookingService.getMyBookings(userId);
        if (myFlightBookings == null || myFlightBookings.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No bookings found for user ID: " + userId);
        }
        return ResponseEntity.status(HttpStatus.OK).body(myFlightBookings);
    }
}