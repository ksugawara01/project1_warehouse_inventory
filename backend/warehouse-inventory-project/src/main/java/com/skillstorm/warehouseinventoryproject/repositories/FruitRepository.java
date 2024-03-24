package com.skillstorm.warehouseinventoryproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.warehouseinventoryproject.models.Fruit;

import jakarta.transaction.Transactional;

@Repository
public interface FruitRepository extends JpaRepository<Fruit, Integer> {
    /*     
    @Query("update Fruit f set f.name = :new_name, f.price = :new_price, f.lowStock = :new_low_stock, f.highStock = :new_high_stock, f.graphColor = :new_graph_color where id = :fruit_id")
    @Modifying
    @Transactional
    public int updateFruitById(
                            @Param("fruit_id") int id, @Param("new_name") String newName, @Param("new_price") double newPrice,
                            @Param("new_low_stock") int newLowStock, @Param("new_high_stock") int newHighStock,
                            @Param("new_graph_color") String newGraphColor
                        );
    */
}
