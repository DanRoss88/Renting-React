import axios from 'axios';

export const storeToken = async (token) => {
  try {
    await localStorage.setItem('token', token);
  } catch (error) {
    console.log("Error storing token: ", error);
  }
};

export const getToken = async () => {
  try {
    const token = await localStorage.getItem("token");
    return token;
  } catch (error) {
    console.log("Error getting token: ", error);
  }
};

export const removeToken = async () => {
  try {
    await localStorage.removeItem("token");
  } catch (error) {
    console.log("Error removing token: ", error);
  }
};