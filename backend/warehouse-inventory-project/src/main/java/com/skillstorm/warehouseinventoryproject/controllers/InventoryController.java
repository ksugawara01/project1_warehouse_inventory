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

import com.skillstorm.warehouseinventoryproject.models.Inventory;
import com.skillstorm.warehouseinventoryproject.services.InventoryService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;

@CrossOrigin
@RestController
@RequestMapping("/inventory")
public class InventoryController {
    
    @Autowired
    InventoryService inventoryService;

    // create item in inventory
    @PostMapping
    public ResponseEntity<Inventory> createItem(@Valid @RequestBody Inventory item) {
        Inventory newItem = inventoryService.createItem(item);
        return new ResponseEntity<Inventory>(newItem, HttpStatus.CREATED);
    }

    // view all items in inventory
    @GetMapping
    public ResponseEntity<List<Inventory>> getInventory() {
        List<Inventory> inventory = inventoryService.getInventory();
        return new ResponseEntity<List<Inventory>>(inventory, HttpStatus.OK);
    }

    // view all items in one warehouse
    @GetMapping("/warehouse-inventory/{warehouseId}")
    public ResponseEntity<List<Inventory>> getInventoryByWarehouseId(@PathVariable @Positive int warehouseId) {
        List<Inventory> inventory = inventoryService.getInventoryByWarehouseId(warehouseId);
        return new ResponseEntity<List<Inventory>>(inventory, HttpStatus.OK);
    }

    // view all items by fruit id
    @GetMapping("/fruit-inventory/{fruitId}")
    public ResponseEntity<List<Inventory>> getInventoryByFruit(@PathVariable int fruitId) {
        List<Inventory> inventory = inventoryService.getInventoryByFruitId(fruitId);
        return new ResponseEntity<List<Inventory>>(inventory, HttpStatus.OK);
    }

    // update item by id
    @PutMapping
    public ResponseEntity<Inventory> updateItem(@Valid @RequestBody Inventory item) {
        Inventory updatedItem = inventoryService.updateItem(item);

        return new ResponseEntity<Inventory>(updatedItem, HttpStatus.OK);
    }

    // delete item by id
    @DeleteMapping
    public ResponseEntity<Integer> deleteItem(@Valid @RequestBody Inventory item) {
        inventoryService.deleteItem(item);
        return ResponseEntity.noContent().build();
    }
}
