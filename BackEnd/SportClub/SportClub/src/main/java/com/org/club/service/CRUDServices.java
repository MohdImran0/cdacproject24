package com.org.club.service;

import java.util.List;

public interface CRUDServices<T, K> {

//	Creating or adding
	T Create(T t);

	List<T> getAll();

//	T fetchById(K k);
	T fetchById(K k);

//	Update
	T Update(T t1, T t2);

//	Delete
	String delete(T t);
}
