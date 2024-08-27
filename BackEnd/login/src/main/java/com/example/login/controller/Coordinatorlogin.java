package com.example.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.login.entity.CoordinatorLogin;
import com.example.login.entity.UserLogin;
import com.example.login.service.CoordinatorLoginService;
import com.example.login.service.UserLoginService;

@RestController
@RequestMapping("/api/users")

public class Coordinatorlogin {

	@Autowired
	private CoordinatorLoginService coordinatorLoginService;

	@GetMapping
	public List<CoordinatorLogin> getAllCoordinator() {
		return coordinatorLoginService.getAllCoordinator();
	}

	@GetMapping("/{email}")
	public ResponseEntity<CoordinatorLogin> getCordinatorByEmail(@PathVariable String email) {
		Optional<CoordinatorLogin> coordinator = coordinatorLoginService.getUserByEmail(email);
		return coordinator.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PostMapping
	public CoordinatorLogin createCordinator(@RequestBody CoordinatorLogin coordinatorLogin) {
		return coordinatorLoginService.createCoordinator(coordinatorLogin);
	}

	@PutMapping("/{email}")
    public ResponseEntity<CoordinatorLogin> updateCoordinator(@PathVariable String email, @RequestBody CoordinatorLogin coordinatorLogin) {
        try {
        	CoordinatorLogin updatedCoordinator = coordinatorLoginService.updateCoordinator(email, coordinatorLogin);
            return ResponseEntity.ok(updatedCoordinator);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deleteCoordinator(@PathVariable String email) {
    	coordinatorLoginService.deleteCoordinator(email);
        return ResponseEntity.noContent().build();
    }
}