package com.naturebasket.backend.service;

import com.naturebasket.backend.dto.ProductRequest;
import com.naturebasket.backend.entity.Product;
import com.naturebasket.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Product getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found: " + id));
    }

    public Product create(ProductRequest req) {
        Product p = new Product();
        p.setName(req.getName());
        p.setPrice(req.getPrice());
        p.setQuantity(req.getQuantity());   // fixed typo
        p.setImageUrl(req.getImageUrl());
        return repo.save(p);
    }

    public Product update(Long id, ProductRequest req) {
        Product p = getById(id);
        p.setName(req.getName());
        p.setPrice(req.getPrice());
        p.setQuantity(req.getQuantity());
        p.setImageUrl(req.getImageUrl());
        return repo.save(p);
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Product not found: " + id);
        }
        repo.deleteById(id);
    }
}
