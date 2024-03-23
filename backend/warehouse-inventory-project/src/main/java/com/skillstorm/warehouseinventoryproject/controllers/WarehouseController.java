package com.skillstorm.warehouseinventoryproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouseinventoryproject.services.WarehouseService;

@RestController
@RequestMapping("/warehouses")
public class WarehouseController {
    
    @Autowired
    WarehouseService warehouseService;

    // create warehouse
    
    // view all warehouses

    // view warehouse by id

    // update warehouse by id

    // delete warehouse by id
}
