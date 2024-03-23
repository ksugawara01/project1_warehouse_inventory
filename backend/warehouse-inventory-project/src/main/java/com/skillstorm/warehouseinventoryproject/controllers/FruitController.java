package com.skillstorm.warehouseinventoryproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouseinventoryproject.services.FruitService;

@RestController
@RequestMapping("/fruits")
public class FruitController {
    
    @Autowired
    FruitService fruitService;

    // create fruit

    // view all fruits

    // view fruit by id

    // update fruit by id

    // delete fruit



}
