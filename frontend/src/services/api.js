import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const categoryAPI = {
  getAll: () => api.get('/category/get'),
  getById: (id) => api.get(`/category/${id}`),
  create: (data) => api.post('/category/create', data),
  delete: (id) => api.delete(`/category/${id}`),
};

export const subcategoryAPI = {
  create: (data) => api.post('/supcateg', data),
};

// Frontend-only Auth Mock
export const authAPI = {
  login: async (credentials) => {
    // Mocking a successful login
    return {
      token: 'mock-token',
      user: {
        id: '1',
        name: 'Demo User',
        email: credentials.email,
        role: credentials.email.includes('admin') ? 'admin' : 'user'
      }
    };
  },
  getProfile: async () => {
    return {
      data: {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'user'
      }
    };
  },
};

export default api;
