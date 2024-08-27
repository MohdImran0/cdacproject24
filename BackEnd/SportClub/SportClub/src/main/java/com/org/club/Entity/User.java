package com.org.club.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "User_club_details")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Role;
	@Column(unique = true)
	private String UserName;
	@Column(unique = true)
	private String email;
	@Temporal(TemporalType.DATE)
	private String dath_of_birth;
	@Column(name = "password")
	private String confirmPassword;

	public User(int id, String role, String userName, String email, String dath_of_birth, String confirmPassword) {
		super();
		this.id = id;
		Role = role;
		UserName = userName;
		this.email = email;
		this.dath_of_birth = dath_of_birth;
		this.confirmPassword = confirmPassword;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDath_of_birth() {
		return dath_of_birth;
	}

	public void setDath_of_birth(String dath_of_birth) {
		this.dath_of_birth = dath_of_birth;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", Role=" + Role + ", UserName=" + UserName + ", email=" + email + ", dath_of_birth="
				+ dath_of_birth + ", confirmPassword=" + confirmPassword + "]";
	}

}