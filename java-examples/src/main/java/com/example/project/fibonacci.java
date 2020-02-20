package com.example.project;

public class fibonacci {

	public int get(int i) {
		if (i <= 1) {
			return i;
		}
		return (get(i - 1) + get(i - 2));
	}

}
