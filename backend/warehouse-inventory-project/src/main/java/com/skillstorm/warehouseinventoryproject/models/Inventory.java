package com.skillstorm.warehouseinventoryproject.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Inventory {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int quantity;

    @Column
    private int fruitId; // foreign key for fruit id

    @Column
    private int warehouseId; // foreign key for warehouse id

    public Inventory() {}

    public Inventory(int quantity, int fruitId, int warehouseId) {
        this.quantity = quantity;
        this.fruitId = fruitId;
        this.warehouseId = warehouseId;
    }

    public Inventory(int id, int quantity, int fruitId, int warehouseId) {
        this.id = id;
        this.quantity = quantity;
        this.fruitId = fruitId;
        this.warehouseId = warehouseId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
        result = prime * result + id;
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
        if (id != other.id)
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
        return "Inventory [id=" + id + ", quantity=" + quantity + ", fruitId=" + fruitId + ", warehouseId="
                + warehouseId + "]";
    }


}
