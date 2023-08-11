package com.solucius.solucius.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solucius.solucius.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserId(String userId);

}
