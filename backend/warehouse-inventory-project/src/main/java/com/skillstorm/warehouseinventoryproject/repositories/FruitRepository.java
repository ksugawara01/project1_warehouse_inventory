package com.skillstorm.warehouseinventoryproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.warehouseinventoryproject.models.Fruit;

@Repository
public interface FruitRepository extends JpaRepository<Fruit, Integer> {
    
}
