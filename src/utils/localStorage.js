const setGoogleAccessToken = (token) => {
  return localStorage.setItem("google_access_token", token);
};

const getGoogleAccessToken = () => {
  return localStorage.getItem("google_access_token");
};

export { setGoogleAccessToken, getGoogleAccessToken };
