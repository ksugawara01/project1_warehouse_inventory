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

    public Fruit saveFruit(Fruit fruit) {
        Fruit newFruit = fruitRepository.save(fruit);

        return newFruit;
    }

    public List<Fruit> getAllFruits() {
        List<Fruit> fruits = fruitRepository.findAll();
        
        return fruits;
    }

    public Fruit getFruitById(int id) {
        Optional<Fruit> fruit = fruitRepository.findById(id);

        if (fruit.isPresent()) {
            return fruit.get();
        }

        return null;
    }

    public Fruit updateFruit(Fruit newFruit) {
        return fruitRepository.save(newFruit);
    }

    public void deleteFruit(Fruit fruit) {
        fruitRepository.delete(fruit);
    }
}
