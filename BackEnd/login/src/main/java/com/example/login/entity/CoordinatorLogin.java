package com.example.login.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class CoordinatorLogin {
	@Entity
	@Table(name = "User_Coordinatedetails")
	public class UserLogin {
		@Id
		@Column(unique = true)
		private String email;
		@Column(unique = true)
		private String password;

		public UserLogin() {
			// TODO Auto-generated constructor stub
		}

		public UserLogin(String email, String password) {
			super();
			this.email = email;
			this.password = password;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		@Override
		public String toString() {
			return "CoordinatorLogin [email=" + email + ", password=" + password + "]";
		}

	}
	
}
