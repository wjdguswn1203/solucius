package com.solucius.solucius.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.solucius.solucius.model.User;
import com.solucius.solucius.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService service;
    // private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User request) {
        User user = service.authenticateUser(request.getUserId(), request.getUserPw());

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User request) {
        if (request.getUserId().isBlank() || request.getUserPw().isBlank() ||
            request.getUserNm().isBlank() || request.getUserEmail().isBlank()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        if (service.findByUserId(request.getUserId()) != null) {
            // 이미 존재하는 사용자 처리
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        User user = service.createUser(request);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
