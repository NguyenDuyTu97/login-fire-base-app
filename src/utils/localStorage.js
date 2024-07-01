const setGoogleAccessToken = (token) => {
  return localStorage.setItem("google_access_token", token);
};

export { setGoogleAccessToken };
