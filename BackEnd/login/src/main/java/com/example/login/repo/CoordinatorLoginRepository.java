package com.example.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.login.entity.CoordinatorLogin;


public interface CoordinatorLoginRepository extends JpaRepository<CoordinatorLogin, String> {

}
