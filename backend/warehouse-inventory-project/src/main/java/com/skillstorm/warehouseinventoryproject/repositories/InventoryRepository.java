package com.skillstorm.warehouseinventoryproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.warehouseinventoryproject.models.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>{
    
}
