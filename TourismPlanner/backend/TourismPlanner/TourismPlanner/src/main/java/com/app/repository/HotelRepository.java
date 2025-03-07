package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long>{

}
