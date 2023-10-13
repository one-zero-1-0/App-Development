// authActions.js

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

// Async Action Creator (e.g., for login)
export const loginUser = (userData) => (dispatch) => {
  // Perform authentication logic here (e.g., API call)
  // If authentication is successful, dispatch loginSuccess action
  const user = { username: userData.username }; // Replace with actual user data

  // Save user authentication state in local storage
  localStorage.setItem('user', JSON.stringify(user));

  dispatch(loginSuccess(user));
};

// Action to check and load user authentication state from local storage
export const checkAuthState = () => (dispatch) => {
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const user = JSON.parse(storedUser);
    dispatch(loginSuccess(user));
  }
};

// Action to clear user authentication state from local storage
export const clearAuthState = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch(logoutUser());
};
