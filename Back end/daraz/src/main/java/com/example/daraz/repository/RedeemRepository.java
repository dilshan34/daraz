package com.example.daraz.repository;

import com.example.daraz.model.Redeem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RedeemRepository extends JpaRepository<Redeem,Integer> {
}
