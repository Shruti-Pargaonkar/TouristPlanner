package com.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;

@Entity
public class Hotel {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="hotelid")
	private long hotelid;
	
	@Column
	private String name;
	
	@Column
	private String location;
	
	@Column
	private String description;
	
	@Column
	private String emailid;
	
	@Column
	private String priceperday;
	
	@Column
	private String totalroom;
	
//	@Transient
//    private String totalprice;
	
	
	public Hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Hotel(long hotelid, String name, String location, String description, String emailid, String priceperday,
			String totalroom ) {
		super();
		this.hotelid = hotelid;
		this.name = name;
		this.location = location;
		this.description = description;
		this.emailid = emailid;
		this.priceperday = priceperday;
		this.totalroom = totalroom;
		
	}


	public long getHotelid() {
		return hotelid;
	}

	public void setHotelid(long hotelid) {
		this.hotelid = hotelid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPriceperday() {
		return priceperday;
	}

	public void setPriceperday(String priceperday) {
		this.priceperday = priceperday;
	}

	public String getTotalroom() {
		return totalroom;
	}

	public void setTotalroom(String totalroom) {
		this.totalroom = totalroom;
	}
	
	
//	 public void calculateTotalPrice() {
//	        double pricePerDay = Double.parseDouble(priceperday);
//	        int totalRoom = Integer.parseInt(totalroom);
//	        double totalPrice = pricePerDay * totalRoom;
//	        this.totalprice = String.valueOf(totalPrice);
//	    }
	

	
}
