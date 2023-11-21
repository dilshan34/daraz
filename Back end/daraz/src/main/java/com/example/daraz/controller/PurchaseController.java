package com.example.daraz.controller;

import com.example.daraz.dto.PurchaseProduct;
import com.example.daraz.model.Product;
import com.example.daraz.model.Purchase;
import com.example.daraz.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PurchaseController {

    @Autowired
    PurchaseService purchaseService;

    @RequestMapping(value = "/purchaseProduct",method = RequestMethod.POST, consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<String> purchaseItems(@RequestBody PurchaseProduct purchase){
        purchaseService.addLoyaltyPointsForPurchase(purchase.getCustomerId(), purchase.getProductId(), purchase.getPoints());
        String message = "New item purchased successfully";
        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/products",method = RequestMethod.GET, produces = {"application/json"})
    public List<Product> getProducts(){
        return purchaseService.getProducts();
    }
}
