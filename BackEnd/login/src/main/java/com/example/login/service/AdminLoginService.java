package com.example.login.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.entity.AdminLogin;

import com.example.login.repo.AdminLoginRepository;

@Service 
public class AdminLoginService {
	 @Autowired
	    private AdminLoginRepository adminLoginRepository;

	    public List<AdminLogin> getAllAdmin() {
	        return adminLoginRepository.findAll();
	    }

	    public Optional<AdminLogin> getAdminByEmail(String email) {
	        return adminLoginRepository.findById(email);
	    }

	    public AdminLogin createUser(AdminLogin adminLogin) {
	        return adminLoginRepository.save(adminLogin);
	    }

	    public void deleteadmin(String email) {
	    	adminLoginRepository.deleteById(email);
	    }

	    public AdminLogin updateUser(String email, AdminLogin adminLogin) {
	        if(adminLoginRepository.existsById(email)) {
	            return adminLoginRepository.save(adminLogin);
	        } else {
	            throw new RuntimeException("admin not found");
	        }
	    }
}
