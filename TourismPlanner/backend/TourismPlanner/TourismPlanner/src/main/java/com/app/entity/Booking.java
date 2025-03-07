package com.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Booking {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Number")
	private int id;

	@Column
	private int userId;
	
	@Column
	private String checkIn; // check in date

	@Column
	private String checkOut; // check out date

	@Column
	private int totalRoom; // total room booked

	@Column
	private int totalDay;
	
	@Column
	private String price;
	

	public Booking() {
		
	}


	public Booking(int id, int userId, String checkIn, String checkOut, int totalRoom, int totalDay, String price) {
		super();
		this.id = id;
		this.userId = userId;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.totalRoom = totalRoom;
		this.totalDay = totalDay;
		this.price = price;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getCheckIn() {
		return checkIn;
	}


	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}


	public String getCheckOut() {
		return checkOut;
	}


	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}


	public int getTotalRoom() {
		return totalRoom;
	}


	public void setTotalRoom(int totalRoom) {
		this.totalRoom = totalRoom;
	}


	public int getTotalDay() {
		return totalDay;
	}


	public void setTotalDay(int totalDay) {
		this.totalDay = totalDay;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}

	


	

}
