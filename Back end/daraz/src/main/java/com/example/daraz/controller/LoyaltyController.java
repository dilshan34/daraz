package com.example.daraz.controller;

import com.example.daraz.dto.LoyaltyRequest;
import com.example.daraz.service.LoyaltyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoyaltyController {

    @Autowired
    LoyaltyService loyaltyService;

    @RequestMapping(value = "/addPoints", method = RequestMethod.POST, consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<String> addLoyaltyPoints(@RequestBody LoyaltyRequest request) {

        loyaltyService.addLoyaltyPoints(request.getCustomerId(), request.getLoyaltyPoints());

        String message = "Loyalty points added successfully";
        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/redeemPoints", method = RequestMethod.POST, consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<String> redeemPoints(@RequestBody LoyaltyRequest request) {

        loyaltyService.redeemPoints(request.getCustomerId(), request.getLoyaltyPoints());

        String message = "Loyalty points redeem successfully";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
