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

    public Warehouse createWarehouse(Warehouse warehouse) {
        Warehouse newWarehouse = warehouseRepository.save(warehouse);

        return newWarehouse;
    }
    
    public List<Warehouse> getAllWarehouses() {
        List<Warehouse> warehouses = warehouseRepository.findAll();

        return warehouses;
    }

    public Warehouse getWarehouseById(int id) {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if (warehouse.isPresent()) {
            return warehouse.get();
        }

        return null;
    }

    public Warehouse updateWarehouse(Warehouse warehouse) {
        Warehouse updatedWarehouse = warehouseRepository.save(warehouse);

        return updatedWarehouse;
    }

    public void deleteWarehouse(Warehouse warehouse) {
        warehouseRepository.delete(warehouse);
    }
}
