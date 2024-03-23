package com.skillstorm.warehouseinventoryproject.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "fruit")
public class Fruit {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private double price;

    @Column
    @Min(0)
    private double lowStock; // indicates what value consistutes this fruit being low stock

    @Column
    private double highStock; // indicates what value consistutes this fruit being high stock

    @Column
    private String graphColor; // determines the color that the fruit will appear in the capacity graph

    public Fruit() {}

    public Fruit(String name, double price, @Min(0) double lowStock, double highStock, String graphColor) {
        this.name = name;
        this.price = price;
        this.lowStock = lowStock;
        this.highStock = highStock;
        this.graphColor = graphColor;
    }

    public Fruit(int id, String name, double price, @Min(0) double lowStock, double highStock, String graphColor) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.lowStock = lowStock;
        this.highStock = highStock;
        this.graphColor = graphColor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getLowStock() {
        return lowStock;
    }

    public void setLowStock(double lowStock) {
        this.lowStock = lowStock;
    }

    public double getHighStock() {
        return highStock;
    }

    public void setHighStock(double highStock) {
        this.highStock = highStock;
    }

    public String getGraphColor() {
        return graphColor;
    }

    public void setGraphColor(String graphColor) {
        this.graphColor = graphColor;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        long temp;
        temp = Double.doubleToLongBits(price);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(lowStock);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(highStock);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + ((graphColor == null) ? 0 : graphColor.hashCode());
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
        Fruit other = (Fruit) obj;
        if (id != other.id)
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
            return false;
        if (Double.doubleToLongBits(lowStock) != Double.doubleToLongBits(other.lowStock))
            return false;
        if (Double.doubleToLongBits(highStock) != Double.doubleToLongBits(other.highStock))
            return false;
        if (graphColor == null) {
            if (other.graphColor != null)
                return false;
        } else if (!graphColor.equals(other.graphColor))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Fruit [id=" + id + ", name=" + name + ", price=" + price + ", lowStock=" + lowStock + ", highStock="
                + highStock + ", graphColor=" + graphColor + "]";
    }

    
    
}
