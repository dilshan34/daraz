package com.example.daraz.service;

import com.example.daraz.exception.CustomerNotFoundException;
import com.example.daraz.exception.InsufficientPointsException;
import com.example.daraz.model.Customer;
import com.example.daraz.model.Redeem;
import com.example.daraz.repository.CustomerRepository;
import com.example.daraz.repository.RedeemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoyaltyService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RedeemRepository redeemRepository;
    public void addLoyaltyPoints(int customerId, int points) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found"));
        customer.addLoyaltyPoints(points);
        customerRepository.save(customer);
    }

    public void redeemPoints(int customerId, int pointsToRedeem) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found"));

        Redeem redeem = new Redeem();

        if (customer.getLoyaltyPoints() >= pointsToRedeem) {
            // Redeem points only if the customer has enough points
            customer.subtractLoyaltyPoints(pointsToRedeem);

            // Save the updated customer information to the database
            customerRepository.save(customer);

            redeem.setCustomerId(customerId);
            redeem.setRedeemPoints(pointsToRedeem);

            redeemRepository.save(redeem);
        } else {
            throw new InsufficientPointsException("Insufficient loyalty points for redemption");
        }
    }
}
