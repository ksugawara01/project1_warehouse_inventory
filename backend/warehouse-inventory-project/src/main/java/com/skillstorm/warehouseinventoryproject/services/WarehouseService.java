package com.skillstorm.warehouseinventoryproject.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehouseinventoryproject.models.Warehouse;
import com.skillstorm.warehouseinventoryproject.repositories.WarehouseRepository;

@Service
public class WarehouseService {
    
    @Autowired
    WarehouseRepository warehouseRepository;

    // Create a new warehouse in the warehouse table
    public Warehouse createWarehouse(Warehouse warehouse) {
        Warehouse newWarehouse = warehouseRepository.save(warehouse);

        return newWarehouse;
    }
    
    // Get all warehouses from the warehouse table
    public List<Warehouse> getAllWarehouses() {
        List<Warehouse> warehouses = warehouseRepository.findAll();

        return warehouses;
    }

    // Get a specific warehouse from the warehouse table
    public Warehouse getWarehouseById(int id) {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if (warehouse.isPresent()) {
            return warehouse.get();
        }

        return null;
    }

    // Update a warehouse
    public Warehouse updateWarehouse(Warehouse warehouse) {
        Warehouse updatedWarehouse = warehouseRepository.save(warehouse);

        return updatedWarehouse;
    }

    // Delete a warehouse
    public void deleteWarehouse(Warehouse warehouse) {
        warehouseRepository.delete(warehouse);
    }
}
