package com.org.club.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.org.club.Entity.Coordinator;
import com.org.club.Repo.CoordinatorRepository;

@Service
public class CoordinatorService implements CRUDServices<Coordinator, Integer> {

	@Autowired
	private CoordinatorRepository coordinateRepository;

	@Override
	public Coordinator Create(Coordinator t) {
		Coordinator register = coordinateRepository.save(t);
		return register;
	}

	@Override
	public List<Coordinator> getAll() {
		return coordinateRepository.findAll();
	}

	@Override
	public Coordinator fetchById(Integer k) {
		Coordinator registration = coordinateRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public Coordinator Update(Coordinator updated, Coordinator existing) {
		existing.setEmail(updated.getEmail());
		existing.setConfirmPassword(updated.getConfirmPassword());
		existing.setUserName(updated.getUserName());
		return coordinateRepository.save(existing);
	}

	@Override
	public String delete(Coordinator t) {
		coordinateRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

}
