package com.naturebasket.backend.repository;

import com.naturebasket.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product , Long> {

    
} 
    

