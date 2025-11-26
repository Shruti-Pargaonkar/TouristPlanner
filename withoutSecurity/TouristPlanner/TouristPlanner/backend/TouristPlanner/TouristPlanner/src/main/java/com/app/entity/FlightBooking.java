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
import jakarta.persistence.Table;


@Entity
@Table(name="FlightBooking")
public class FlightBooking {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Number")
	private int id;
	
	@Column
	private int userId;
	
	
	@Column
	private String name;
	
	@Column
	private String source;
	
	@Column
	private String destination;
	
	
	@Column
	private String date;
	
	@Column
	private String price;
	
	 	
	

	public FlightBooking() {
		super();
		// TODO Auto-generated constructor stub
	}



	public FlightBooking(int id, String name, String source, String destination, String date,
			String price,int userId) {
		super();
		this.id = id;
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.date = date;
		this.price = price;
		this.userId = userId;
		
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getSource() {
		return source;
	}



	public void setSource(String source) {
		this.source = source;
	}



	public String getDestination() {
		return destination;
	}



	public void setDestination(String destination) {
		this.destination = destination;
	}



	

	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getPrice() {
		return price;
	}



	public void setPrice(String price) {
		this.price = price;
	}




	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
	@Override
	public String toString() {
		return "FlightBooking [id=" + id + ", userId=" + userId + ", name=" + name + ", source=" + source
				+ ", destination=" + destination + ", date=" + date + ", price=" + price + "]";
	}
	
	

}
