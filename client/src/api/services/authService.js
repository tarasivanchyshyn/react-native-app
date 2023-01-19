import { backendURL } from '../../constants/constants';

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${backendURL}/api/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${backendURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
