package com.app.dto;

import java.util.List;

import com.app.entity.Booking;
import com.app.entity.FlightBooking;

public class UserDTO {

	private int id;
	private String username;
	private String email;
	private String password;
	private String mobilenumber;
	private List<FlightBooking> flightBookings;
	private List<Booking> Bookings;
	
	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDTO(int id, String username, String email, String password, String mobilenumber,List<FlightBooking> flightBookings , List<Booking> Bookings) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.mobilenumber = mobilenumber;
		this.flightBookings = flightBookings;
		this.Bookings = Bookings;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public List<FlightBooking> getFlightBookings() {
		return flightBookings;
	}

	public void setFlightBookings(List<FlightBooking> flightBookings) {
		this.flightBookings = flightBookings;
	}

	public List<Booking> getHotelBookings() {
		return Bookings;
	}

	public void setHotelBookings(List<Booking> hotelBookings) {
		Bookings = hotelBookings;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", mobilenumber=" + mobilenumber + ", flightBookings=" + flightBookings + ", Bookings="
				+ Bookings + "]";
	}

	

	

		
	
}
