// src/services/api.js
import axios from 'axios';

// Mock data for development
const mockReferrals = [
  { id: 1, company: 'Company A', position: 'Developer' },
  { id: 2, company: 'Company B', position: 'Designer' },
];

const mockServices = [
  { id: 1, service: 'Resume Review' },
  { id: 2, service: 'Mock Interview' },
];

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API base URL
  timeout: 10000, // Set a timeout for requests
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.message);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

const getReferrals = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockReferrals);
    }, 1000); // Simulate network delay
  });
};

const getServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServices);
    }, 1000); // Simulate network delay
  });
};

const api = {
  getReferrals,
  getServices,
};

export default api;
