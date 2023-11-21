package com.example.daraz.service;

import com.example.daraz.model.Customer;
import com.example.daraz.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers(String email){

        if(email != null){
            return customerRepository.findByEmail(email);
        }else{
            return customerRepository.findAll();
        }

    }

}
