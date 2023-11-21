package com.example.daraz.service;

import com.example.daraz.exception.CustomerNotFoundException;
import com.example.daraz.exception.ProductNotFoundException;
import com.example.daraz.model.Customer;
import com.example.daraz.model.Product;
import com.example.daraz.model.Purchase;
import com.example.daraz.repository.CustomerRepository;
import com.example.daraz.repository.ProductRepository;
import com.example.daraz.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    PurchaseRepository purchaseRepository;
    @Autowired
    ProductRepository productRepository;

    public void addLoyaltyPointsForPurchase(int customerId, int productId, int points) {
        // Retrieve the customer from the database
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found"));

        // Retrieve the product from the database
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        // Create a new purchase
        Purchase purchase = new Purchase();
        purchase.setCustomer(customer);
        purchase.setProduct(product);

        // Save the purchase to the database
        purchaseRepository.save(purchase);

        // Add loyalty points to the customer
        customer.addLoyaltyPoints(points);

        // Save the updated customer information to the database
        customerRepository.save(customer);
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }
}
