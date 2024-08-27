package com.example.login.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.entity.UserLogin;
import com.example.login.repo.UserLoginRepository;

@Service
public class UserLoginService {

    @Autowired
    private UserLoginRepository userLoginRepository;

    public List<UserLogin> getAllUsers() {
        return userLoginRepository.findAll();
    }

    public Optional<UserLogin> getUserByEmail(String email) {
        return userLoginRepository.findById(email);
    }

    public UserLogin createUser(UserLogin userLogin) {
        return userLoginRepository.save(userLogin);
    }

    public void deleteUser(String email) {
        userLoginRepository.deleteById(email);
    }

    public UserLogin updateUser(String email, UserLogin userLogin) {
        if(userLoginRepository.existsById(email)) {
            return userLoginRepository.save(userLogin);
        } else {
            throw new RuntimeException("User not found");
        }
    }
}
