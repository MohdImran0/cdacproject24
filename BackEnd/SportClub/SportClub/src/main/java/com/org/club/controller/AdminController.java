package com.org.club.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.org.club.Entity.Admin;
import com.org.club.service.AdminService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/Admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminService adminservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> registerUser(@RequestBody Admin newregistration) {
		Admin registerUser = adminservice.Create(newregistration);
		return new ResponseEntity<>(registerUser, HttpStatus.OK);
	}

	@GetMapping("/getallAdmin")
	public ResponseEntity<?> getAllUser() {
		List<Admin> found = adminservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int id) {
		Admin found = adminservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody Admin updated) {
		Admin found = adminservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(adminservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteUser(@PathVariable int id) {
		Admin found = adminservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(adminservice.delete(found), HttpStatus.OK);
	}

}
