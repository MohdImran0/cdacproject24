package com.org.club.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.org.club.Entity.Admin;
import com.org.club.Repo.AdminRepository;

@Service
public class AdminService implements CRUDServices<Admin, Integer> {

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public Admin Create(Admin t) {
		Admin register = adminRepository.save(t);
		return register;
	}

	@Override
	public List<Admin> getAll() {
		return adminRepository.findAll();
	}

	@Override
	public Admin fetchById(Integer k) {
		Admin registration = adminRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public Admin Update(Admin updated, Admin existing) {
		existing.setEmail(updated.getEmail());
		existing.setConfirmPassword(updated.getConfirmPassword());
		existing.setUserName(updated.getUserName());
		return adminRepository.save(existing);
	}

	@Override
	public String delete(Admin t) {
		adminRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

}
