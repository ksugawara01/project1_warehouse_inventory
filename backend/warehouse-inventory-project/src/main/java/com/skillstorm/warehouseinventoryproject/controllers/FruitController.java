package com.skillstorm.warehouseinventoryproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouseinventoryproject.models.Fruit;
import com.skillstorm.warehouseinventoryproject.services.FruitService;

@CrossOrigin
@RestController
@RequestMapping("/fruits")
public class FruitController {
    
    @Autowired
    FruitService fruitService;

    // create fruit
    @PostMapping
    public ResponseEntity<Fruit> createFruit(@RequestBody Fruit fruit) {
        Fruit newFruit = fruitService.saveFruit(fruit);

        return new ResponseEntity<Fruit>(newFruit, HttpStatus.CREATED);
    }

    // view all fruits
    @GetMapping
    public ResponseEntity<List<Fruit>> getAllFruits() {
        List<Fruit> fruits = fruitService.getAllFruits();
        return new ResponseEntity<List<Fruit>>(fruits, HttpStatus.OK);
    }

    // view fruit by id
    @GetMapping("/{id}")
    public ResponseEntity<Fruit> getFruitById(@PathVariable int id) {
        Fruit fruit = fruitService.getFruitById(id);

        return new ResponseEntity<>(fruit, HttpStatus.OK);
    }

    // update fruit
    @PutMapping
    public ResponseEntity<Fruit> updateFruit(@RequestBody Fruit fruit) {
        Fruit updatedFruit = fruitService.updateFruit(fruit);

        return new ResponseEntity<Fruit>(updatedFruit, HttpStatus.OK);
    }

    // delete fruit
    @DeleteMapping
    public ResponseEntity<Integer> deleteFruit(@RequestBody Fruit fruit) {
        fruitService.deleteFruit(fruit);
        return ResponseEntity.noContent().build();
    }


}
