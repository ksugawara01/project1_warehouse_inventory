package com.skillstorm.warehouseinventoryproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouseinventoryproject.services.InventoryService;

@RestController
@RequestMapping("/inventory")
public class InventoryController {
    
    @Autowired
    InventoryService inventoryService;

    // add items to inventory

    // view all items in inventory

    // view all items in one warehouse

    // view all fruits by fruit id

    // update item by id

    // delete item by id
}
