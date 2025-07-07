import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUsers = async (username: string) => {
  try {
    const response = await api.get(`/search/users?q=${username}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserRepos = async (login: string) => {
  try {
    const response = await api.get(`/users/${login}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
