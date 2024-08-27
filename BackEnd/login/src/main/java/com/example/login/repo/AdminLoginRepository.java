package com.example.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.login.entity.AdminLogin;

public interface AdminLoginRepository extends JpaRepository<AdminLogin, String>{

}
