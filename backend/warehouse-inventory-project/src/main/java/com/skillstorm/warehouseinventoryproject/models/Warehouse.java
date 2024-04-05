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
@Table(name = "warehouse")
public class Warehouse {
    @Column(name = "warehouse_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int warehouseId;

    @Column
    @NotNull
    private String address;

    @Column(name = "warehouse_name")
    @NotNull
    private String warehouseName;

    @Column(name="max_capacity")
    @NotNull
    @Min(0)
    private int maxCapacity;

    public Warehouse() {}

    public Warehouse(String address, String warehouseName, int maxCapacity) {
        this.address = address;
        this.warehouseName = warehouseName;
        this.maxCapacity = maxCapacity;
    }

    public Warehouse(int warehouseId, String address, String warehouseName, int maxCapacity) {
        this.warehouseId = warehouseId;
        this.address = address;
        this.warehouseName = warehouseName;
        this.maxCapacity = maxCapacity;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWarehouseName() {
        return warehouseName;
    }

    public void setWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
    }

    public int getMaxCapacity() {
        return maxCapacity;
    }

    public void setMaxCapacity(int maxCapacity) {
        this.maxCapacity = maxCapacity;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + warehouseId;
        result = prime * result + ((address == null) ? 0 : address.hashCode());
        result = prime * result + ((warehouseName == null) ? 0 : warehouseName.hashCode());
        result = prime * result + maxCapacity;
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
        Warehouse other = (Warehouse) obj;
        if (warehouseId != other.warehouseId)
            return false;
        if (address == null) {
            if (other.address != null)
                return false;
        } else if (!address.equals(other.address))
            return false;
        if (warehouseName == null) {
            if (other.warehouseName != null)
                return false;
        } else if (!warehouseName.equals(other.warehouseName))
            return false;
        if (maxCapacity != other.maxCapacity)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Warehouse [warehouseId=" + warehouseId + ", address=" + address + ", warehouseName=" + warehouseName
                + ", maxCapacity=" + maxCapacity + "]";
    }

}
