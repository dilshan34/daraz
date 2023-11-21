package com.example.daraz.controller;

import com.example.daraz.model.Customer;
import com.example.daraz.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/register",method = RequestMethod.POST, consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer){

        customerService.addCustomer(customer);
        String message = "Customer added successfully";
        return new ResponseEntity<>( message,HttpStatus.CREATED);
    }

    @RequestMapping(value = "/customers",method = RequestMethod.GET, produces = {"application/json"})
    public List<Customer> getAllCustomers(@RequestParam(name = "email",value = "email",required = false)String email){
        return customerService.getAllCustomers(email);
    }
}
