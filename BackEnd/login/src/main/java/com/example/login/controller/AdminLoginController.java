package com.example.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.login.entity.UserLogin;
import com.example.login.service.UserLoginService;

public class AdminLoginController {
	@Autowired
	private UserLoginService userLoginService;

	@GetMapping
	public List<UserLogin> getAllUsers() {
		return userLoginService.getAllUsers();
	}

	@GetMapping("/{email}")
	public ResponseEntity<UserLogin> getUserByEmail(@PathVariable String email) {
		Optional<UserLogin> user = userLoginService.getUserByEmail(email);
		return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PostMapping
	public UserLogin createUser(@RequestBody UserLogin userLogin) {
		return userLoginService.createUser(userLogin);
	}

	@PutMapping("/{email}")
	public ResponseEntity<UserLogin> updateUser(@PathVariable String email, @RequestBody UserLogin userLogin) {
		try {
			UserLogin updatedUser = userLoginService.updateUser(email, userLogin);
			return ResponseEntity.ok(updatedUser);
		} catch (RuntimeException e) {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{email}")
	public ResponseEntity<Void> deleteUser(@PathVariable String email) {
		userLoginService.deleteUser(email);
		return ResponseEntity.noContent().build();
	}
}
