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
@Table(name = "fruit")
public class Fruit {
    @Id
    @Column(name = "fruit_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fruitId;

    @Column(name = "fruit_name")
    @NotNull
    private String fruitName;

    @Column
    @NotNull
    private double price;

    @Column(name = "low_stock")
    @Min(1)
    @NotNull
    private int lowStock; // indicates what value consistutes this fruit being low stock

    @Column(name = "high_stock")
    @Min(1)
    @NotNull
    private int highStock; // indicates what value consistutes this fruit being high stock

    @Column(name = "graph_color")
    @NotNull
    private String graphColor; // determines the color that the fruit will appear in the capacity graph

    public Fruit() {}

    public Fruit(String fruitName, double price, @Min(0) int lowStock, int highStock, String graphColor) {
        this.fruitName = fruitName;
        this.price = price;
        this.lowStock = lowStock;
        this.highStock = highStock;
        this.graphColor = graphColor;
    }

    public Fruit(int fruitId, String fruitName, double price, @Min(0) int lowStock, int highStock, String graphColor) {
        this.fruitId = fruitId;
        this.fruitName = fruitName;
        this.price = price;
        this.lowStock = lowStock;
        this.highStock = highStock;
        this.graphColor = graphColor;
    }

    public int getFruitId() {
        return fruitId;
    }

    public void setFruitId(int fruitId) {
        this.fruitId = fruitId;
    }

    public String getFruitName() {
        return fruitName;
    }

    public void setFruitName(String fruitName) {
        this.fruitName = fruitName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getLowStock() {
        return lowStock;
    }

    public void setLowStock(int lowStock) {
        this.lowStock = lowStock;
    }

    public int getHighStock() {
        return highStock;
    }

    public void setHighStock(int highStock) {
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
        result = prime * result + fruitId;
        result = prime * result + ((fruitName == null) ? 0 : fruitName.hashCode());
        long temp;
        temp = Double.doubleToLongBits(price);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + lowStock;
        result = prime * result + highStock;
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
        if (fruitId != other.fruitId)
            return false;
        if (fruitName == null) {
            if (other.fruitName != null)
                return false;
        } else if (!fruitName.equals(other.fruitName))
            return false;
        if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
            return false;
        if (lowStock != other.lowStock)
            return false;
        if (highStock != other.highStock)
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
        return "Fruit [fruitId=" + fruitId + ", fruitName=" + fruitName + ", price=" + price + ", lowStock=" + lowStock
                + ", highStock=" + highStock + ", graphColor=" + graphColor + "]";
    }
    
}
