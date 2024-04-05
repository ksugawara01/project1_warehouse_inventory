package com.skillstorm.warehouseinventoryproject.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehouseinventoryproject.models.Fruit;
import com.skillstorm.warehouseinventoryproject.repositories.FruitRepository;

@Service
public class FruitService {
    
    @Autowired
    FruitRepository fruitRepository;

    // Save a fruit object to the database
    public Fruit saveFruit(Fruit fruit) {
        Fruit newFruit = fruitRepository.save(fruit);

        return newFruit;
    }

    // Get all fruits rows from the fruit table
    public List<Fruit> getAllFruits() {
        List<Fruit> fruits = fruitRepository.findAll();
        
        return fruits;
    }

    // Get a specific fruit from the fruit table
    public Fruit getFruitById(int id) {
        Optional<Fruit> fruit = fruitRepository.findById(id);

        if (fruit.isPresent()) {
            return fruit.get();
        }

        return null;
    }

    // Update a fruit in the database
    public Fruit updateFruit(Fruit newFruit) {
        return fruitRepository.save(newFruit);
    }

    // Delete a fruit in the database
    public void deleteFruit(Fruit fruit) {
        fruitRepository.delete(fruit);
    }
}
