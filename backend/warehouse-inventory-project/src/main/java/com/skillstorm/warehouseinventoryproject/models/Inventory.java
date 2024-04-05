package com.skillstorm.warehouseinventoryproject.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "inventory")
public class Inventory {
    @Column(name = "inventory_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int inventoryId;

    @Column
    @Min(0)
    @NotNull
    private int quantity;

    @Column(name = "fruit_id")
    private int fruitId; // foreign key for fruit id

    @Column(name = "warehouse_id")
    private int warehouseId; // foreign key for warehouse id

    public Inventory() {}

    public Inventory(int quantity, int fruitId, int warehouseId) {
        this.quantity = quantity;
        this.fruitId = fruitId;
        this.warehouseId = warehouseId;
    }

    public Inventory(int inventoryId, int quantity, int fruitId, int warehouseId) {
        this.inventoryId = inventoryId;
        this.quantity = quantity;
        this.fruitId = fruitId;
        this.warehouseId = warehouseId;
    }

    public int getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(int inventoryId) {
        this.inventoryId = inventoryId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getFruitId() {
        return fruitId;
    }

    public void setFruitId(int fruitId) {
        this.fruitId = fruitId;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + inventoryId;
        result = prime * result + quantity;
        result = prime * result + fruitId;
        result = prime * result + warehouseId;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Inventory other = (Inventory) obj;
        if (inventoryId != other.inventoryId)
            return false;
        if (quantity != other.quantity)
            return false;
        if (fruitId != other.fruitId)
            return false;
        if (warehouseId != other.warehouseId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Inventory [inventoryId=" + inventoryId + ", quantity=" + quantity + ", fruitId=" + fruitId
                + ", warehouseId=" + warehouseId + "]";
    }

}
