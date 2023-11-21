package com.example.daraz.exception;

public class InsufficientPointsException extends RuntimeException {
    public InsufficientPointsException(String insufficientLoyaltyPointsForRedemption) {
        super(insufficientLoyaltyPointsForRedemption);
    }
}
