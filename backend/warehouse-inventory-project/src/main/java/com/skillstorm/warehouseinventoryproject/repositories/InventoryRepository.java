package com.skillstorm.warehouseinventoryproject.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.warehouseinventoryproject.models.Inventory;

import jakarta.transaction.Transactional;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>{
    
    // will return all rows with the matching warehouseId
    @Query("SELECT i FROM Inventory i WHERE i.warehouseId = :warehouseId")
    @Transactional
    public List<Inventory> findAllByWarehouseId(@Param("warehouseId") int warehouseId);

    // will return all rows with the matching fruitId
    @Query("SELECT i FROM Inventory i WHERE i.fruitId = :fruitId")
    @Transactional
    public List<Inventory> findAllByFruitId(@Param("fruitId") int fruitId);
}
