// src/api.js
import axios from 'axios';

const API_BASE = 'https://smurfbusexpensessitebackend.onrender.com/'; // Adjust based on your backend

export const createExpense = (expense) => axios.post(`${API_BASE}/expense`, expense);
export const createMultipleExpenses = (expenses) => axios.post(`${API_BASE}/expenses`, expenses);
export const getExpenseById = (id) => axios.get(`${API_BASE}/expense/${id}`);
export const getAllExpenses = () => axios.get(`${API_BASE}/expenses`);
export const updateExpense = (id, expense) => axios.put(`${API_BASE}/expense/${id}`, expense);
export const deleteExpense = (id) => axios.delete(`${API_BASE}/expense/${id}`);
export const getExpensesByMonthYear = (month, year) => axios.get(`${API_BASE}/expenses/`, { params: { month, year }});
export const getExpensesByYear = (year) => axios.get(`${API_BASE}/expenses/${year}`);
export const getExpensesByCategory = (category) => axios.get(`${API_BASE}/expenses/category/${category}`);
