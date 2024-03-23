package com.skillstorm.warehouseinventoryproject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehouseinventoryproject.models.Fruit;
import com.skillstorm.warehouseinventoryproject.repositories.FruitRepository;

@Service
public class FruitService {
    
    @Autowired
    FruitRepository fruitRepository;

    public List<Fruit> getAllFruits() {
        List<Fruit> fruits = fruitRepository.findAll();
        
        return fruits;
    }
}
