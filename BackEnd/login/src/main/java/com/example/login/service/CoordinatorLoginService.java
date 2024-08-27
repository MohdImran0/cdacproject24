package com.example.login.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.entity.CoordinatorLogin;
import com.example.login.entity.UserLogin;
import com.example.login.repo.CoordinatorLoginRepository;
import com.example.login.repo.UserLoginRepository;

@Service
public class CoordinatorLoginService {
	 @Autowired
	    private CoordinatorLoginRepository coordinatorLoginRepository;

	    public List<CoordinatorLogin> getAllCoordinator() {
	        return coordinatorLoginRepository.findAll();
	    }

	    public Optional<CoordinatorLogin> getUserByEmail(String email) {
	        return coordinatorLoginRepository.findById(email);
	    }

	    public CoordinatorLogin createCoordinator(CoordinatorLogin coordinatorLogin) {
	        return coordinatorLoginRepository.save(coordinatorLogin);
	    }

	    public void deleteCoordinator(String email) {
	    	coordinatorLoginRepository.deleteById(email);
	    }

	    public CoordinatorLogin updateCoordinator(String email, CoordinatorLogin coordinatorLogin) {
	        if(coordinatorLoginRepository.existsById(email)) {
	            return coordinatorLoginRepository.save(coordinatorLogin);
	        } else {
	            throw new RuntimeException("Coordinator not found");
	        }
	    }
}
