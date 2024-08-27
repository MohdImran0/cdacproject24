package com.org.club.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.org.club.Entity.User;
import com.org.club.Repo.UserRepository;

@Service
public class UserService implements CRUDServices<User, Integer> {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User Create(User t) {
		User register = userRepository.save(t);
		return register;
	}

	@Override
	public List<User> getAll() {
		return userRepository.findAll();
	}

	@Override
	public User fetchById(Integer k) {
		User registration = userRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public User Update(User updated, User existing) {
		existing.setEmail(updated.getEmail());
		existing.setConfirmPassword(updated.getConfirmPassword());
		existing.setUserName(updated.getUserName());
		return userRepository.save(existing);
	}

	@Override
	public String delete(User t) {
		userRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

}
