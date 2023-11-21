package com.example.daraz.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "redeemed_points")
public class Redeem {

    @Id
    @Column(name = "redemption_id ")
    private int redeemId;
    @Column(name = "customer_id")
    private int customerId;
    @Column(name = "points_redeemed")
    private int redeemPoints;
    @Column(name = "redemption_date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @PrePersist
    private void onCreate(){
        date=new Date();
    }

    public int getRedeemId() {
        return redeemId;
    }

    public void setRedeemId(int redeemId) {
        this.redeemId = redeemId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public int getRedeemPoints() {
        return redeemPoints;
    }

    public void setRedeemPoints(int redeemPoints) {
        this.redeemPoints = redeemPoints;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
