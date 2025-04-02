import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface Submission {
  _id: string;
  name: string;
  mobileNumber: string;
  pickupLocation: string;
  dropLocation: string;
  movingDate: string;
}

interface LoginResponse {
  token: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const loginAdmin = async (credentials: { username: string; password: string }): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/admin/login", credentials);
  return response.data;
};

export const submitForm = async (formData: any) => {
  try {
    const response = await api.post("/submit-form", formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { error: "Something went wrong. Please try again." };
  }
};


// Get all form submissions (Admin)
export const getSubmissions = async (): Promise<Submission[]> => {
  const response = await api.get<Submission[]>('/admin/submissions');
  return response.data;
};


// Export submissions as CSV (Admin)
export const exportSubmissions = async (): Promise<Blob> => {
  const response = await api.get('/admin/export', { responseType: 'blob' });
  return response.data as Blob; 
};

export const deleteSubmission = async (id: string) => {
  try {
    const response = await api.delete(`/admin/submissions/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete request error:", error);
    throw error;
  }
};

interface ErrorWithResponse {
  response?: {
    data?: {
      error?: string;
    };
  };
  message?: string;
}

export const submitContactForm = async (formData: { name: string; email: string; message: string }) => {
  try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error: unknown) {
    console.error("Error submitting contact form:", error);
    
    // Cast to a more specific type to handle error properties
    const err = error as ErrorWithResponse;
    
    // Extract error message with safe property access
    const errorMessage = err.response?.data?.error || err.message || "Something went wrong";
    throw new Error(errorMessage);
  }
};

