package com.example.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.login.entity.UserLogin;

public interface UserLoginRepository extends JpaRepository<UserLogin, String> {
	// Additional custom query methods can be defined here if needed
}
