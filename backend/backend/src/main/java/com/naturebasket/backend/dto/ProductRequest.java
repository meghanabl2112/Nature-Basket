package com.naturebasket.backend.dto;

import jakarta.validation.constraints.*;

public class ProductRequest {
    @NotBlank(message = "name is required")
    private String name;

    @NotNull(message = "Price is required")
    @Positive(message = "Price must be >0")
    private Double price;

    @NotNull(message = "Quantity is REquired")
    @Min(value = 0, message = "quantity must be >=0")
    private Integer quantity;

    private String imageUrl;

    public String getName() { return name; }
    public void setName(String name) {this.name = name; }

    public Double getPrice() { return price;}
    public void setPrice(Double price) { this.price = price;}

    public Integer getQuantity() { return quantity;}
    public void setQuantity(Integer quantity) { this.quantity = quantity;}

    public String getImageUrl() { return imageUrl;}
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl;}


}