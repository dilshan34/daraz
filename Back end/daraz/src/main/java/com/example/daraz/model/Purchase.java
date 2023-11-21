package com.example.daraz.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "purchases")
public class Purchase {

    @Id
    @Column(name = "purchase_id ")
    private int id;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "purchase_date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @PrePersist
    private void onCreate(){
        date=new Date();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
