package com.skillstorm.warehouseinventoryproject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehouseinventoryproject.models.Inventory;
import com.skillstorm.warehouseinventoryproject.repositories.InventoryRepository;

@Service
public class InventoryService {
    
    @Autowired
    InventoryRepository inventoryRepository;

    // Create a new item in the inventory table
    public Inventory createItem(Inventory item) {
        Inventory newItem = inventoryRepository.save(item);

        return newItem;
    }

    // Get all items in the inventory table
    public List<Inventory> getInventory() {
        List<Inventory> inventory = inventoryRepository.findAll();

        return inventory;
    }
    
    // Get all items from a specific warehouse
    public List<Inventory> getInventoryByWarehouseId(int warehouseId) {
        List<Inventory> inventory = inventoryRepository.findAllByWarehouseId(warehouseId);

        return inventory;
    }

    // Get all items of a specific fruit type
    public List<Inventory> getInventoryByFruitId(int fruitId) {
        List<Inventory> inventory = inventoryRepository.findAllByFruitId(fruitId);

        return inventory;
    }

    // Update an item in the inventory table
    public Inventory updateItem(Inventory newItem) {
        return inventoryRepository.save(newItem);
    }

    // Delete an item in the inventory table
    public void deleteItem(Inventory item) {
        inventoryRepository.delete(item);
    }
}
