package com.skillstorm.warehouseinventoryproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouseinventoryproject.models.Fruit;
import com.skillstorm.warehouseinventoryproject.services.FruitService;

@RestController
@RequestMapping("/fruits")
public class FruitController {
    
    @Autowired
    FruitService fruitService;

    // create fruit

    // view all fruits
    @GetMapping
    public ResponseEntity<List<Fruit>> getAllFruits() {
        List<Fruit> fruits = fruitService.getAllFruits();
        return new ResponseEntity<List<Fruit>>(fruits, HttpStatus.OK);
    }
    
    // view fruit by id

    // update fruit by id

    // delete fruit



}
