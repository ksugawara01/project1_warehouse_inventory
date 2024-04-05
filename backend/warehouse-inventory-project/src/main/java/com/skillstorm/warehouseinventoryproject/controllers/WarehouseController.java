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

import com.skillstorm.warehouseinventoryproject.models.Warehouse;
import com.skillstorm.warehouseinventoryproject.services.WarehouseService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;

@CrossOrigin
@RestController
@RequestMapping("/warehouses")
public class WarehouseController {
    
    @Autowired
    WarehouseService warehouseService;

    // create warehouse
    @PostMapping
    public ResponseEntity<Warehouse> createWarehouse(@RequestBody Warehouse warehouse) {
        Warehouse newWarehouse = warehouseService.createWarehouse(warehouse);

        return new ResponseEntity<Warehouse>(newWarehouse, HttpStatus.CREATED);
    }
    
    // view all warehouses
    @GetMapping
    public ResponseEntity<List<Warehouse>> getAllWarehouses() {
        List<Warehouse> warehouses = warehouseService.getAllWarehouses();

        return new ResponseEntity<List<Warehouse>>(warehouses, HttpStatus.OK);
    }

    // view warehouse by id
    @GetMapping("/{id}")
    public ResponseEntity<Warehouse> getWarehouseById(@PathVariable @Positive @Positive int id) {
        Warehouse warehouse = warehouseService.getWarehouseById(id);

        return new ResponseEntity<Warehouse>(warehouse, HttpStatus.OK);
    }

    // update warehouse
    @PutMapping
    public ResponseEntity<Warehouse> updateWarehouse(@Valid @RequestBody Warehouse warehouse) {
        Warehouse updatedWarehouse = warehouseService.updateWarehouse(warehouse);

        return new ResponseEntity<Warehouse>(updatedWarehouse, HttpStatus.OK);
    }

    // delete warehouse
    @DeleteMapping
    public ResponseEntity<Integer> deleteWarehouse(@Valid @RequestBody Warehouse warehouse) {
        warehouseService.deleteWarehouse(warehouse);

        return ResponseEntity.noContent().build();
    }
}
