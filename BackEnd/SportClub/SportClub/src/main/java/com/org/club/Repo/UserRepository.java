package com.org.club.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.club.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
