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

    public Inventory createItem(Inventory item) {
        Inventory newItem = inventoryRepository.save(item);

        return newItem;
    }

    public List<Inventory> getInventory() {
        List<Inventory> inventory = inventoryRepository.findAll();

        return inventory;
    }
    
    public List<Inventory> getInventoryByWarehouseId(int warehouseId) {
        List<Inventory> inventory = inventoryRepository.findAllByWarehouseId(warehouseId);

        return inventory;
    }

    public List<Inventory> getInventoryByFruitId(int fruitId) {
        List<Inventory> inventory = inventoryRepository.findAllByFruitId(fruitId);

        return inventory;
    }

    public Inventory updateItem(Inventory newItem) {
        return inventoryRepository.save(newItem);
    }

    public void deleteItem(Inventory item) {
        inventoryRepository.delete(item);
    }
}
