package com.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


@Entity
@Table(name="Flight_details")
public class FlightDetails {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Number")
	private long id;
	
	@Column
	private String name;
	
	@Column
	private String source;
	
	@Column
	private String destination;
	
	@Column
	private String capacity;
	
	@Column
	private String date;
	
	@Column
	private String price;
	
	

	public FlightDetails() {
		super();
		// TODO Auto-generated constructor stub
	}



	public FlightDetails(long id, String name, String source, String destination, String capacity, String date,
			String price) {
		super();
		this.id = id;
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.capacity = capacity;
		this.date = date;
		this.price = price;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
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



	public String getCapacity() {
		return capacity;
	}



	public void setCapacity(String capacity) {
		this.capacity = capacity;
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
	
	
	
	

}
