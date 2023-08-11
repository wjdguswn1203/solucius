
package com.solucius.solucius.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solucius.solucius.model.User;
import com.solucius.solucius.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User findByUserId(String userId) {
        return repository.findByUserId(userId);
    }

    public User authenticateUser(String userId, String userPw) {
        User user = findByUserId(userId);
        if (user != null) {
            if (user.getUserPw().equals(userPw)) {
                return user;
            }
            // return passwordEncoder.matches(password, user.getPassword());
        }
        return null;
    }

    public User createUser(User request) {
        return repository.save(request);
    }
    
}
